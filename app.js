const PROVERBS = [
  'Little by little, a little becomes a lot.', 'A journey of a thousand miles begins with a single step.',
  'Where there is a will, there is a way.', 'Slow and steady wins the race.', 'Well begun is half done.',
  'Every cloud has a silver lining.', 'Practice makes perfect.', 'Actions speak louder than words.',
  'The early bird catches the worm.', 'Fortune favors the bold.', 'Fall seven times, stand up eight.',
  'Rome was not built in a day.', 'No rain, no flowers.', 'The harder you work, the luckier you get.',
  'Diligence is the mother of good luck.', 'A calm sea never made a skilled sailor.',
  'The secret of getting ahead is getting started.', 'Great things grow from tiny beginnings.',
  'Do one thing at a time, and do it well.', 'Make each day your masterpiece.',
  'The best way out is always through.', 'Dreams work when you do.',
  'You do not have to be perfect to make progress.', 'Keep going; your future self is watching.',
  'A little progress each day adds up to big results.', 'Begin anywhere.',
  'What you do today can improve all your tomorrows.', 'Courage starts with showing up.',
  'Difficult roads often lead to beautiful destinations.', 'The best view comes after the hardest climb.',
  'Believe you can and you are halfway there.', 'It always seems impossible until it is done.',
  'Start where you are. Use what you have. Do what you can.', 'Small steps are still steps.',
  'A goal without a plan is just a wish.', 'Success is a series of small wins.',
  'You are capable of more than you think.', 'Keep planting; the garden will come.',
  'Discipline turns wishes into plans.', 'Consistency beats intensity when intensity cannot last.',
  'Progress, not perfection.', 'Make room for growth.', 'You can restart without starting over.',
  'The next step is enough for today.', 'Patience is also progress.', 'Your pace is still a pace.',
  'Every expert was once a beginner.', 'Done is better than endlessly waiting for perfect.',
  'Learn, adapt, continue.', 'The seed does not see the flower, but it grows anyway.',
  'Bright futures are built one ordinary day at a time.', 'Stay curious; keep becoming.',
  'Good things take time and tending.', 'One page, one problem, one step at a time.',
  'A focused hour can change a whole day.', 'Let your habits carry you when motivation is sleepy.',
  'Growth is quiet before it is visible.', 'Keep your eyes on the next useful thing.'
]

const state = {
  view: 'home',
  events: [],
  saveDates: [],
  academic: null,
  academicYear: 1,
  academicSemester: 1,
  academicTab: 'theory',
  calendarCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  selectedDate: isoDate(new Date()),
  eventsFormOpen: false,
  growthYear: 1
}

const $ = (id) => document.getElementById(id)

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(body.error || 'Something went wrong.')
  }

  return body
}

function isoDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function prettyDate(value) {
  if (!value) return ''
  return new Date(`${value}T00:00:00`).toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  )
}

function daysLeft(value) {
  const now = new Date()
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  )

  const target = new Date(`${value}T00:00:00`)

  return Math.ceil(
    (target - today) / 86400000
  )
}

function ordinal(n) {
  return n === 1
    ? '1st'
    : n === 2
    ? '2nd'
    : n === 3
    ? '3rd'
    : `${n}th`
}

function roman(n) {
  return [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII'
  ][n]
}

function showToast(message) {
  const el = $('toast')

  if (!el) return

  el.textContent = message
  el.classList.remove('hidden')

  clearTimeout(showToast.timer)

  showToast.timer =
    setTimeout(
      () => el.classList.add('hidden'),
      2800
    )
}

function setView(view) {
  state.view = view

  document
    .querySelectorAll('.view')
    .forEach(
      (el) =>
        el.classList.toggle(
          'active-view',
          el.id === `view-${view}`
        )
    )

  document
    .querySelectorAll('[data-nav]')
    .forEach(
      (el) =>
        el.classList.toggle(
          'active',
          el.dataset.nav === view
        )
    )

  const labels = {
    home: 'Home sweet home',
    garden: 'Academic Garden',
    academic: 'Academic Race',
    events: 'Events Elixir',
    dates: 'Save the Date',
    growth: 'Academic Growth'
  }

  if ($('current-chip')) {
    $('current-chip').textContent =
      labels[view] || 'Pookie'
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if (view === 'home') {
    renderHome()
  }

  if (view === 'events') {
    renderEvents()
  }

  if (view === 'dates') {
    renderSaveDates()
  }

  if (view === 'growth') {
    renderAcademicGrowth()
  }
}

function dayOfYear(date) {
  const start = new Date(
    date.getFullYear(),
    0,
    0
  )

  return Math.floor(
    (date - start) /
    86400000
  )
}

function renderHome() {
  const now = new Date()

  $('home-date').textContent =
    now.toLocaleDateString(
      'en-IN',
      {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
    )

  $('daily-proverb').textContent =
    PROVERBS[
      dayOfYear(now) %
      PROVERBS.length
    ]

  renderCalendar()
  renderHomeUpcoming()
}

function renderCalendar() {
  const cursor =
    state.calendarCursor

  $('calendar-month').textContent =
    cursor.toLocaleDateString(
      'en-IN',
      {
        month: 'long',
        year: 'numeric'
      }
    )

  $('calendar-weekdays').innerHTML =
    [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ]
      .map(
        (d) =>
          `<span>${d}</span>`
      )
      .join('')

  const startOffset =
    (
      new Date(
        cursor.getFullYear(),
        cursor.getMonth(),
        1
      ).getDay() +
      6
    ) % 7

  const totalDays =
    new Date(
      cursor.getFullYear(),
      cursor.getMonth() + 1,
      0
    ).getDate()

  let html = ''

  for (
    let i = 0;
    i < startOffset;
    i++
  ) {
    html +=
      '<span class="calendar-day blank"></span>'
  }

  for (
    let day = 1;
    day <= totalDays;
    day++
  ) {
    const d =
      new Date(
        cursor.getFullYear(),
        cursor.getMonth(),
        day
      )

    const key =
      isoDate(d)

    const isToday =
      key === isoDate(
        new Date()
      )

    const selected =
      key === state.selectedDate

    const hasItem =
      state.saveDates.some(
        (item) =>
          item.date === key
      )

    html += `
      <button
        class="calendar-day ${
          isToday ? 'today' : ''
        } ${
          selected ? 'selected' : ''
        }"
        data-date="${key}"
      >
        <span>${day}</span>
        ${hasItem ? '<i></i>' : ''}
      </button>
    `
  }

  $('calendar-grid').innerHTML =
    html

  $('calendar-grid')
    .querySelectorAll(
      '[data-date]'
    )
    .forEach(
      (button) =>
        button.addEventListener(
          'click',
          () => {
            state.selectedDate =
              button.dataset.date

            renderCalendar()
          }
        )
    )

  const selectedItems =
    state.saveDates.filter(
      (item) =>
        item.date ===
        state.selectedDate
    )

  $('selected-day-content').innerHTML =
    selectedItems.length
      ? `
        <div class="selected-date-box">
          <strong>
            ${prettyDate(
              state.selectedDate
            )}
          </strong>

          ${
            selectedItems
              .map(
                (item) => `
                  <div class="mini-event">
                    🦋
                    ${escapeHtml(
                      item.title
                    )}
                    ·
                    ${escapeHtml(
                      item.type ||
                      'Reminder'
                    )}
                  </div>
                `
              )
              .join('')
          }
        </div>
      `
      : `
        <div class="empty-soft">
          Nothing saved on this day yet.
          A blank petal 🌸
        </div>
      `
}

function renderHomeUpcoming() {
  const upcoming =
    state.saveDates
      .map(
        (item) => ({
          ...item,
          days:
            daysLeft(
              item.date
            )
        })
      )
      .filter(
        (x) =>
          x.days >= 0
      )
      .sort(
        (a, b) =>
          a.days - b.days
      )
      .slice(
        0,
        4
      )

  $('home-upcoming').innerHTML =
    upcoming.length
      ? upcoming
          .map(
            deadlineCard
          )
          .join('')
      : `
        <div class="card empty-state">
          Your calendar is peacefully empty.
          Add something to Save the Date 🌷
        </div>
      `
}

function deadlineCard(item) {
  const label =
    item.days === 0
      ? 'TODAY'
      : item.days === 1
      ? 'TOMORROW'
      : `${item.days} DAYS LEFT`

  return `
    <article
      class="
        deadline-card
        ${
          item.days <= 2
            ? 'urgent'
            : ''
        }
      "
    >

      <div class="deadline-icon">
        🦋
      </div>

      <div class="deadline-content">

        <span class="deadline-pill">
          ${label}
        </span>

        <h3>
          ${escapeHtml(
            item.title
          )}
        </h3>

        <p>
          ${prettyDate(
            item.date
          )}

          ${
            item.time
              ? `
                ·
                ${escapeHtml(
                  item.time
                )}
              `
              : ''
          }
        </p>

      </div>

    </article>
  `
}

/* ============================================================
   ACADEMIC
   ============================================================ */

function renderAcademicYears() {
  $('academic-years').innerHTML =
    [1, 2, 3, 4]
      .map(
        (year) => `
          <button
            class="${
              state.academicYear ===
              year
                ? 'active'
                : ''
            }"
            data-year="${year}"
          >
            ${ordinal(year)} Year
          </button>
        `
      )
      .join('')

  $('academic-years')
    .querySelectorAll(
      '[data-year]'
    )
    .forEach(
      (button) =>
        button.addEventListener(
          'click',
          () => {

            state.academicYear =
              Number(
                button.dataset.year
              )

            state.academicSemester =
              state.academicYear *
              2 -
              1

            renderAcademic()

          }
        )
    )

  $('academic-semesters').innerHTML =
    [
      state.academicYear *
        2 -
        1,

      state.academicYear *
        2

    ]
      .filter(
        (s) =>
          s <= 8
      )
      .map(
        (sem) => `
          <button
            class="${
              state.academicSemester ===
              sem
                ? 'active'
                : ''
            }"
            data-semester="${sem}"
          >
            Semester ${roman(
              sem
            )}
          </button>
        `
      )
      .join('')

  $('academic-semesters')
    .querySelectorAll(
      '[data-semester]'
    )
    .forEach(
      (button) =>
        button.addEventListener(
          'click',
          () => {

            state.academicSemester =
              Number(
                button.dataset
                  .semester
              )

            state.academicTab =
              'theory'

            renderAcademic()

          }
        )
    )
}

function renderAcademic() {
  if (!state.academic) return

  renderAcademicYears()

  const summary =
    state.academic.summary

  const semSummary =
    summary.semesters.find(
      (s) =>
        s.semester ===
        state.academicSemester
    )

  const yearSummary =
    summary.years.find(
      (y) =>
        y.year ===
        state.academicYear
    )

  $('academic-summary').innerHTML =
    [
      summaryCard(
        'Semester GPA',
        semSummary?.gpa,
        '🎓'
      ),

      summaryCard(
        'Year CGPA',
        yearSummary?.cgpa,
        '🌸'
      ),

      summaryCard(
        'Current Overall CGPA',
        summary.overallCgpa,
        '🦋'
      )
    ].join('')

  document
    .querySelectorAll(
      '[data-academic-tab]'
    )
    .forEach(
      (button) =>
        button.classList.toggle(
          'active',
          button.dataset.academicTab ===
          state.academicTab
        )
    )

  document
    .querySelectorAll(
      '[data-academic-tab]'
    )
    .forEach(
      (button) =>
        button.onclick = () => {

          state.academicTab =
            button.dataset
              .academicTab

          renderAcademic()

        }
    )

  const semester =
    state.academic.curriculum.find(
      (s) =>
        s.semester ===
        state.academicSemester
    )

  const tabSummary =
    summary.semesters.find(
      (s) =>
        s.semester ===
        state.academicSemester
    )

  if (
    state.academicTab ===
    'theory'
  ) {
    renderTheory(
      semester,
      tabSummary
    )
  }

  if (
    state.academicTab ===
    'practical'
  ) {
    renderPractical(
      semester
    )
  }

  if (
    state.academicTab ===
    'cgpa'
  ) {
    renderCgpa(
      yearSummary,
      summary.overallCgpa
    )
  }
}

function summaryCard(
  label,
  value,
  icon
) {
  return `
    <div
      class="summary-card card"
    >

      <span>
        ${icon}
      </span>

      <div>

        <small>
          ${label}
        </small>

        <strong>
          ${
            value == null
              ? '—'
              : Number(
                  value
                ).toFixed(
                  2
                )
          }
        </strong>

      </div>

    </div>
  `
}

function renderTheory(
  semester,
  summary
) {

  const courses =
    semester.courses.filter(
      (c) =>
        !c.practical
    )

  $('academic-panel').innerHTML =
    `
      <section
        class="card table-card"
      >

        <div
          class="
            section-heading
            compact
          "
        >

          <div>

            <p class="eyebrow">

              ${prettySemester(
                semester.semester
              )}
              marks

            </p>

            <h2>
              📚 Theory
            </h2>

          </div>

          <span
            class="percentage-chip"
          >
            CAT 1:
            ${
              summary?.cat1Percentage ==
              null
                ? '—'
                : summary.cat1Percentage +
                  '%'
            }
          </span>

          <span
            class="percentage-chip"
          >
            CAT 2:
            ${
              summary?.cat2Percentage ==
              null
                ? '—'
                : summary.cat2Percentage +
                  '%'
            }
          </span>

        </div>

        <div
          class="table-scroll"
        >

          <table>

            <thead>

              <tr>

                <th>
                  Subject
                </th>

                <th>
                  CAT 1
                </th>

                <th>
                  CAT 2
                </th>

                <th>
                  Semester Grade
                </th>

              </tr>

            </thead>

            <tbody>
              ${courses
                .map(
                  theoryRow
                )
                .join('')}
            </tbody>

          </table>

        </div>

        <p
          class="table-note"
        >

          CAT percentages are calculated separately.
          Credits are not used for CAT percentages.
          Change the CAT max mark when your assessment
          uses a scale other than 100.

        </p>

      </section>
    `

  bindAcademicInputs()
}

function theoryRow(
  course
) {

  const e =
    course.entry

  return `
    <tr>

      <td>

        <strong>
          ${course.code}
        </strong>

        <span>
          ${escapeHtml(
            course.title
          )}
        </span>

        <em>
          ${escapeHtml(
            course.category
          )}
          ·
          ${course.credits}
          cr
        </em>

      </td>


      <td>

        <div
          class="score-pair"
        >

          <input
            data-code="${course.code}"
            data-field="cat1"
            inputmode="decimal"
            value="${attr(
              e.cat1
            )}"
            placeholder="Score"
          >

          <input
            class="tiny"
            data-code="${course.code}"
            data-field="cat1Max"
            inputmode="decimal"
            value="${attr(
              e.cat1Max
            )}"
            aria-label="CAT 1 max mark"
          >

        </div>

      </td>


      <td>

        <div
          class="score-pair"
        >

          <input
            data-code="${course.code}"
            data-field="cat2"
            inputmode="decimal"
            value="${attr(
              e.cat2
            )}"
            placeholder="Score"
          >

          <input
            class="tiny"
            data-code="${course.code}"
            data-field="cat2Max"
            inputmode="decimal"
            value="${attr(
              e.cat2Max
            )}"
            aria-label="CAT 2 max mark"
          >

        </div>

      </td>


      <td>

        <select
          data-code="${course.code}"
          data-field="semesterGrade"
        >

          ${gradeOptions(
            e.semesterGrade
          )}

        </select>

      </td>

    </tr>
  `
}

function renderPractical(
  semester
) {

  const courses =
    semester.courses.filter(
      (c) =>
        c.practical
    )

  $('academic-panel').innerHTML =
    courses.length
      ? `
        <section
          class="card table-card"
        >

          <div
            class="
              section-heading
              compact
            "
          >

            <div>

              <p class="eyebrow">
                Lab, project & internship grades
              </p>

              <h2>
                🧪 Practical
              </h2>

            </div>

          </div>


          <div
            class="table-scroll"
          >

            <table>

              <thead>

                <tr>

                  <th>
                    Practical / Project
                  </th>

                  <th>
                    Grade
                  </th>

                </tr>

              </thead>


              <tbody>

                ${
                  courses
                    .map(
                      (course) => `
                        <tr>

                          <td>

                            <strong>
                              ${course.code}
                            </strong>

                            <span>
                              ${escapeHtml(
                                course.title
                              )}
                            </span>

                            <em>
                              ${escapeHtml(
                                course.category
                              )}
                              ·
                              ${course.credits}
                              cr
                            </em>

                          </td>


                          <td>

                            <select
                              data-code="${course.code}"
                              data-field="practicalGrade"
                            >

                              ${gradeOptions(
                                course.entry
                                  .practicalGrade
                              )}

                            </select>

                          </td>

                        </tr>
                      `
                    )
                    .join('')
                }

              </tbody>

            </table>

          </div>


          <p
            class="table-note"
          >

            Practical grades use their
            preloaded credits in GPA/CGPA.
            CAT 1/CAT 2 never use credits.

          </p>

        </section>
      `
      : `
        <section
          class="card empty-state"
        >

          No practical/project subjects
          are in this semester. 🌸

        </section>
      `

  bindAcademicInputs()
}

function renderCgpa(
  yearSummary,
  overall
) {

  $('academic-panel').innerHTML =
    `
      <section
        class="cgpa-board"
      >

        <div
          class="cgpa-orb"
        >

          🏆

          <strong>
            ${
              yearSummary?.cgpa ==
              null
                ? '—'
                : Number(
                    yearSummary.cgpa
                  ).toFixed(
                    2
                  )
            }
          </strong>

          <span>
            Year CGPA
          </span>

        </div>


        <div
          class="cgpa-copy"
        >

          <p
            class="eyebrow"
          >
            Theory + practical + credits
          </p>

          <h2>
            Your ${
              ordinal(
                yearSummary?.year ||
                1
              )
            }-year garden
          </h2>

          <p>

            The year CGPA combines the
            entered grade points from both
            semesters, using the preloaded
            credits and ignoring zero-credit
            courses.

          </p>


          <div
            class="little-stat"
          >

            <span>
              Overall CGPA
            </span>

            <strong>
              ${
                overall == null
                  ? '—'
                  : Number(
                      overall
                    ).toFixed(
                      2
                    )
              }
            </strong>

          </div>

        </div>

      </section>
    `
}

function prettySemester(n) {
  return `Semester ${roman(n)}`
}

function gradeOptions(value) {
  return [
    '',
    'O',
    'A+',
    'A',
    'B+',
    'B',
    'C',
    'U',
    'RA'
  ]
    .map(
      (g) =>
        `
          <option
            value="${g}"
            ${
              g === value
                ? 'selected'
                : ''
            }
          >
            ${
              g ||
              'Choose grade'
            }
          </option>
        `
    )
    .join('')
}

function bindAcademicInputs() {

  document
    .querySelectorAll(
      '#academic-panel [data-code]'
    )
    .forEach(
      (el) =>
        el.addEventListener(
          'input',
          () => {

            const course =
              findCourse(
                el.dataset.code
              )

            if (course) {
              course.entry[
                el.dataset.field
              ] =
                el.value
            }

            refreshAcademicNumbersWithoutRerender()

          }
        )
    )

  document
    .querySelectorAll(
      '#academic-panel [data-code]'
    )
    .forEach(
      (el) =>
        el.addEventListener(
          'change',
          () => {

            const course =
              findCourse(
                el.dataset.code
              )

            if (course) {
              course.entry[
                el.dataset.field
              ] =
                el.value
            }

            refreshAcademicNumbersWithoutRerender()

          }
        )
    )
}

function findCourse(code) {

  for (
    const semester of
    state.academic.curriculum
  ) {

    const found =
      semester.courses.find(
        (c) =>
          c.code ===
          code
      )

    if (found) {
      return found
    }

  }

  return null
}

async function refreshAcademicNumbersWithoutRerender() {

  try {

    const entries =
      academicEntries()

    const calc =
      await api(
        '/api/academic/calculate',
        {
          method:
            'POST',

          body:
            JSON.stringify({
              entries
            })
        }
      )

    state.academic.summary =
      calc.summary

    const sem =
      state.academic.summary.semesters.find(
        (s) =>
          s.semester ===
          state.academicSemester
      )

    const year =
      state.academic.summary.years.find(
        (y) =>
          y.year ===
          state.academicYear
      )

    const values = [
      $('academic-summary')
        .children[0],

      $('academic-summary')
        .children[1],

      $('academic-summary')
        .children[2]
    ]

    if (
      values[0]
    ) {

      values[0]
        .querySelector(
          'strong'
        )
        .textContent =
          sem?.gpa ==
          null
            ? '—'
            : Number(
                sem.gpa
              ).toFixed(
                2
              )

    }

    if (
      values[1]
    ) {

      values[1]
        .querySelector(
          'strong'
        )
        .textContent =
          year?.cgpa ==
          null
            ? '—'
            : Number(
                year.cgpa
              ).toFixed(
                2
              )

    }

    if (
      values[2]
    ) {

      values[2]
        .querySelector(
          'strong'
        )
        .textContent =
          calc.summary.overallCgpa ==
          null
            ? '—'
            : Number(
                calc.summary.overallCgpa
              ).toFixed(
                2
              )

    }

    if (
      state.academicTab ===
      'theory'
    ) {

      const chips =
        $('academic-panel')
          .querySelectorAll(
            '.percentage-chip'
          )

      if (
        chips[0]
      ) {

        chips[0].textContent =
          `CAT 1: ${
            sem?.cat1Percentage ==
            null
              ? '—'
              : sem.cat1Percentage +
                '%'
          }`

      }

      if (
        chips[1]
      ) {

        chips[1].textContent =
          `CAT 2: ${
            sem?.cat2Percentage ==
            null
              ? '—'
              : sem.cat2Percentage +
                '%'
          }`

      }

    }

  } catch {
    /*
      Live calculation can wait for save if
      server is temporarily unavailable.
    */
  }
}

function academicEntries() {

  const entries = {}

  state.academic.curriculum
    .forEach(
      (sem) =>
        sem.courses.forEach(
          (course) => {

            entries[
              course.code
            ] =
              course.entry

          }
        )
    )

  return entries
}

/* ============================================================
   ACADEMIC LOCK / SAVE
   ============================================================ */

async function unlockAcademic(
  password
) {

  await api(
    '/api/academic/unlock',
    {
      method:
        'POST',

      body:
        JSON.stringify({
          password
        })
    }
  )

  state.academic =
    await api(
      '/api/academic'
    )

  state.academicYear =
    1

  state.academicSemester =
    1

  state.academicTab =
    'theory'

  hideLock()

  setView(
    'academic'
  )

  renderAcademic()

  showToast(
    'Academic Garden unlocked 🌷'
  )
}

function showLock() {

  $('lock-modal')
    .classList
    .remove(
      'hidden'
    )

  $('lock-password')
    .value =
    ''

  $('lock-error')
    .textContent =
    ''

  setTimeout(
    () =>
      $('lock-password')
        .focus(),
    50
  )
}

function hideLock() {

  $('lock-modal')
    .classList
    .add(
      'hidden'
    )
}

async function saveAcademic() {

  try {

    const result =
      await api(
        '/api/academic',
        {
          method:
            'PUT',

          body:
            JSON.stringify({
              entries:
                academicEntries()
            })
        }
      )

    state.academic =
      result

    saveAcademicHistorySnapshot()

    renderAcademic()

    renderAcademicGrowth()

    showToast(
      'Academic garden saved 🌷'
    )

  } catch (
    error
  ) {

    showToast(
      error.message
    )

  }
}

async function loadPublicData() {

  try {

    const [
      events,
      dates
    ] =
      await Promise.all([
        api('/api/events'),
        api('/api/save-dates')
      ])

    state.events =
      events

    state.saveDates =
      dates

    renderHome()

    renderEvents()

    renderSaveDates()

  } catch (
    error
  ) {

    showToast(
      error.message
    )

  }
}

/* ============================================================
   EXTRA STYLES
   ============================================================ */

function ensureExtraStyles() {

  if (
    $('pookie-extra-styles')
  ) {

    return

  }

  const style =
    document.createElement(
      'style'
    )

  style.id =
    'pookie-extra-styles'

  style.textContent = `

    .event-elixir-toolbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      margin:14px 0;
      flex-wrap:wrap;
    }

    .event-elixir-toolbar .save-main {
      margin:0;
      width:auto;
    }

    .growth-grid {
      display:grid;
      grid-template-columns:
        repeat(2,minmax(0,1fr));
      gap:10px;
      margin-top:14px;
    }

    .growth-stat {
      padding:14px;
      border-radius:18px;
      background:rgba(255,255,255,.82);
      border:1px solid
        rgba(245,169,200,.25);
    }

    .growth-stat small {
      opacity:.7;
      display:block;
      margin-bottom:5px;
    }

    .growth-stat strong {
      font-size:24px;
    }

    .growth-tabs {
      display:grid;
      grid-template-columns:
        repeat(4,1fr);
      gap:8px;
      margin:14px 0;
    }

    .growth-tabs button {
      border:0;
      border-radius:14px;
      padding:10px 6px;
      background:
        rgba(255,255,255,.82);
      font:inherit;
      cursor:pointer;
    }

    .growth-tabs button.active {
      background:#f5a9c8;
      color:#fff;
    }

    .growth-message {
      margin-top:12px;
      padding:14px;
      border-radius:18px;
      background:#fff7fb;
      line-height:1.5;
    }

    .growth-up {
      color:#188958;
    }

    .growth-down {
      color:#c34e6d;
    }

    .growth-neutral {
      color:#777;
    }

    .growth-semester {
      margin-top:12px;
      padding:14px;
      border-radius:18px;
      background:
        rgba(255,255,255,.82);
      border:1px solid
        rgba(245,169,200,.22);
    }

    .growth-row {
      display:flex;
      justify-content:space-between;
      gap:10px;
      padding:7px 0;
      border-bottom:
        1px dashed rgba(0,0,0,.08);
    }

    .growth-row:last-child {
      border-bottom:0;
    }

    @media (max-width:600px) {

      .growth-grid {
        grid-template-columns:1fr;
      }

      .growth-tabs {
        grid-template-columns:
          repeat(4,1fr);
      }

    }

  `

  document.head.appendChild(
    style
  )
}

/* ============================================================
   ACADEMIC GROWTH TILE
   ============================================================ */

function ensureAcademicGrowthTile() {

  if (
    $('open-academic-growth')
  ) {

    return

  }

  const gardenGrid =
    document.querySelector(
      '.garden-grid'
    )

  const academicButton =
    $('open-academic')

  if (
    !gardenGrid ||
    !academicButton
  ) {

    return

  }

  const tile =
    document.createElement(
      'button'
    )

  tile.className =
    'garden-tile'

  tile.id =
    'open-academic-growth'

  tile.innerHTML = `

    <div
      class="tile-icon"
    >
      🌱
    </div>

    <div
      class="tile-copy"
    >

      <h2>
        Academic Growth
      </h2>

      <p>
        CAT, GPA & CGPA progress
      </p>

    </div>

    <span
      class="tile-arrow"
    >
      →
    </span>

  `

  tile.addEventListener(
    'click',
    async () => {

      try {

        if (
          !state.academic
        ) {

          state.academic =
            await api(
              '/api/academic'
            )

        }

        state.growthYear =
          state.academicYear ||
          1

        setView(
          'growth'
        )

      } catch {

        showLock()

      }

    }
  )

  academicButton
    .insertAdjacentElement(
      'afterend',
      tile
    )
}

/* ============================================================
   ACADEMIC GROWTH HISTORY
   ============================================================ */

function academicHistoryKey() {
  return 'pookieAcademicGrowthHistory'
}

function loadAcademicHistory() {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(
          academicHistoryKey()
        ) ||
        '[]'
      )

    return Array.isArray(
      value
    )
      ? value
      : []

  } catch {

    return []

  }
}

function saveAcademicHistorySnapshot() {

  if (
    !state.academic
  ) {

    return

  }

  const history =
    loadAcademicHistory()

  const snapshot =
    JSON.parse(
      JSON.stringify(
        state.academic
      )
    )

  const last =
    history[
      history.length - 1
    ]

  const currentString =
    JSON.stringify(
      snapshot
    )

  if (
    last &&
    JSON.stringify(
      last.academic
    ) ===
    currentString
  ) {

    return

  }

  history.push({

    savedAt:
      new Date()
        .toISOString(),

    academic:
      snapshot

  })

  localStorage.setItem(
    academicHistoryKey(),
    JSON.stringify(
      history.slice(-50)
    )
  )
}

/* ============================================================
   ACADEMIC GROWTH HELPERS
   ============================================================ */

function currentSemesterSummary(
  semesterNumber,
  source
) {

  return (
    source
      ?.summary
      ?.semesters
      ?.find(
        (s) =>
          s.semester ===
          semesterNumber
      ) ||
    null
  )
}

function currentYearSummary(
  year,
  source
) {

  return (
    source
      ?.summary
      ?.years
      ?.find(
        (y) =>
          y.year ===
          year
      ) ||
    null
  )
}

function semesterForYear(
  year
) {

  return [
    year * 2 - 1,
    year * 2
  ]
    .filter(
      (s) =>
        s <= 8
    )
}

function latestSemesterWithData(
  year,
  source
) {

  const semesters =
    semesterForYear(
      year
    )

  for (
    let i =
      semesters.length - 1;
    i >= 0;
    i--
  ) {

    const summary =
      currentSemesterSummary(
        semesters[i],
        source
      )

    if (!summary) {
      continue
    }

    if (
      summary.gpa !=
        null ||
      summary.cat1Percentage !=
        null ||
      summary.cat2Percentage !=
        null
    ) {

      return semesters[i]

    }

  }

  return null
}

function growthDelta(
  value,
  previous
) {

  if (
    value == null ||
    previous == null
  ) {

    return null

  }

  return Number(
    value
  ) -
  Number(
    previous
  )
}

function growthText(
  label,
  delta
) {

  if (
    delta == null
  ) {

    return `
      ${label} has a baseline now.
      Give me another update and I’ll
      start keeping receipts. 👀
    `

  }

  const amount =
    Math.abs(
      delta
    ).toFixed(
      2
    )

  if (
    delta >
    0.004
  ) {

    return `
      🦋 ${label} increased by
      ${amount}.
      Sneaky improvement detected.
    `

  }

  if (
    delta <
    -0.004
  ) {

    return `
      🫣 ${label} decreased by
      ${amount}.
      The comeback department is open.
    `

  }

  return `
    🌸 ${label} is almost unchanged.
    Holding the line.
  `
}

function growthCard(
  label,
  value,
  previous,
  suffix = ''
) {

  const delta =
    growthDelta(
      value,
      previous
    )

  const cls =
    delta == null
      ? 'growth-neutral'
      : delta >
        0.004
      ? 'growth-up'
      : delta <
        -0.004
      ? 'growth-down'
      : 'growth-neutral'

  const arrow =
    delta == null
      ? '•'
      : delta >
        0.004
      ? '↑'
      : delta <
        -0.004
      ? '↓'
      : '→'

  return `

    <div
      class="growth-stat"
    >

      <small>
        ${escapeHtml(
          label
        )}
      </small>

      <strong>

        ${
          value == null
            ? '—'
            : Number(
                value
              ).toFixed(
                2
              ) +
              suffix
        }

      </strong>

      <div
        class="${cls}"
      >

        ${arrow}

        ${
          delta == null
            ? 'No previous value yet'
            : Math.abs(
                delta
              ).toFixed(
                2
              )
        }

      </div>

    </div>

  `
}

/* ============================================================
   ACADEMIC GROWTH VIEW
   ============================================================ */

function ensureAcademicGrowthView() {

  if (
    $('view-growth')
  ) {

    return

  }

  const main =
    document.querySelector(
      '.main-content'
    )

  if (
    !main
  ) {

    return

  }

  const section =
    document.createElement(
      'section'
    )

  section.id =
    'view-growth'

  section.className =
    'view'

  section.innerHTML = `

    <div
      class="page-head"
    >

      <div>

        <p
          class="eyebrow"
        >
          Tiny plant, big receipts 🌱
        </p>

        <h1>
          🌱 Academic Growth
        </h1>

        <p>
          See what improved,
          what dropped and who is
          still ghosting you.
        </p>

      </div>


      <button
        class="outline-btn"
        id="growth-back"
      >

        ← Garden

      </button>

    </div>


    <div
      id="growth-panel"
    ></div>

  `

  main.appendChild(
    section
  )

  $('growth-back').onclick =
    () =>
      setView(
        'garden'
      )
}

function renderAcademicGrowth() {

  ensureExtraStyles()

  ensureAcademicGrowthView()

  const panel =
    $('growth-panel')

  if (
    !panel
  ) {

    return

  }

  if (
    !state.academic
  ) {

    panel.innerHTML = `

      <section
        class="card empty-state"
      >

        Academic data is currently locked. 🌷

        <br><br>

        Open Academic Race and
        unlock it first.

      </section>

    `

    return

  }

  const year =
    state.growthYear ||
    1

  const currentYear =
    currentYearSummary(
      year,
      state.academic
    )

  const latestSemester =
    latestSemesterWithData(
      year,
      state.academic
    )

  const latest =
    latestSemester
      ? currentSemesterSummary(
          latestSemester,
          state.academic
        )
      : null

  const history =
    loadAcademicHistory()

  const previous =
    history.length >=
    2
      ? history[
          history.length - 2
        ].academic
      : null

  const previousYear =
    currentYearSummary(
      year,
      previous
    )

  const previousLatest =
    latestSemester
      ? currentSemesterSummary(
          latestSemester,
          previous
        )
      : null

  let message = ''

  if (
    !latest
  ) {

    message = `

      <div
        class="growth-message"
      >

        <strong>

          🦋
          ${ordinal(
            year
          )}
          Year is still waiting
          for your update.

        </strong>


        <br>


        <span
          class="growth-neutral"
        >

          Hello? I’m looking for
          your marks.

          Apparently they are hiding
          backstage. 👀

        </span>

      </div>

    `

  } else if (
    latest.gpa == null &&
    (
      latest.cat1Percentage !=
        null ||
      latest.cat2Percentage !=
        null
    )
  ) {

    message = `

      <div
        class="growth-message"
      >

        <strong>
          🌸 CAT marks have entered
          the chat.
        </strong>


        <br><br>

        GPA is still backstage
        waiting for semester grades.

        I refuse to invent one. 😌

      </div>

    `

  } else {

    message = `

      <div
        class="growth-message"
      >

        <strong>
          ✨ Academic activity detected.
        </strong>


        <br><br>

        I found your latest update in

        <strong>
          ${
            latestSemester
              ? prettySemester(
                  latestSemester
                )
              : ''
          }
        </strong>.

        I’m keeping receipts. 👀

      </div>

    `

  }

  const yearCgpa =
    currentYear?.cgpa ??
    null

  const previousCgpa =
    previousYear?.cgpa ??
    null

  const cat1 =
    latest?.cat1Percentage ??
    null

  const cat2 =
    latest?.cat2Percentage ??
    null

  const gpa =
    latest?.gpa ??
    null

  const cards = `

    <div
      class="growth-grid"
    >

      ${growthCard(
        'Year CGPA',
        yearCgpa,
        previousCgpa
      )}


      ${growthCard(
        'Latest CAT 1',
        cat1,
        previousLatest?.cat1Percentage ??
          null,
        '%'
      )}


      ${growthCard(
        'Latest CAT 2',
        cat2,
        previousLatest?.cat2Percentage ??
          null,
        '%'
      )}


      ${growthCard(
        'Latest Semester GPA',
        gpa,
        previousLatest?.gpa ??
          null
      )}

    </div>

  `

  const evidence = `

    <div
      class="academic-section"
      style="
        margin-top:14px
      "
    >

      <div
        class="
          growth-message
          ${
            growthDelta(
              yearCgpa,
              previousCgpa
            ) > 0.004
              ? 'growth-up'
              : growthDelta(
                  yearCgpa,
                  previousCgpa
                ) < -0.004
              ? 'growth-down'
              : 'growth-neutral'
          }
        "
      >

        ${growthText(
          'Year CGPA',
          growthDelta(
            yearCgpa,
            previousCgpa
          )
        )}

      </div>


      <div
        class="
          growth-message
          ${
            growthDelta(
              cat1,
              previousLatest?.cat1Percentage
            ) > 0.004
              ? 'growth-up'
              : growthDelta(
                  cat1,
                  previousLatest?.cat1Percentage
                ) < -0.004
              ? 'growth-down'
              : 'growth-neutral'
          }
        "
      >

        ${growthText(
          'CAT 1',
          growthDelta(
            cat1,
            previousLatest?.cat1Percentage
          )
        )}

      </div>


      <div
        class="
          growth-message
          ${
            growthDelta(
              cat2,
              previousLatest?.cat2Percentage
            ) > 0.004
              ? 'growth-up'
              : growthDelta(
                  cat2,
                  previousLatest?.cat2Percentage
                ) < -0.004
              ? 'growth-down'
              : 'growth-neutral'
          }
        "
      >

        ${growthText(
          'CAT 2',
          growthDelta(
            cat2,
            previousLatest?.cat2Percentage
          )
        )}

      </div>


      <div
        class="
          growth-message
          ${
            growthDelta(
              gpa,
              previousLatest?.gpa
            ) > 0.004
              ? 'growth-up'
              : growthDelta(
                  gpa,
                  previousLatest?.gpa
                ) < -0.004
              ? 'growth-down'
              : 'growth-neutral'
          }
        "
      >

        ${growthText(
          'Semester GPA',
          growthDelta(
            gpa,
            previousLatest?.gpa
          )
        )}

      </div>

    </div>

  `

  const semesters =
    semesterForYear(
      year
    )
      .map(
        (sem) => {

          const s =
            currentSemesterSummary(
              sem,
              state.academic
            )

          return `

            <div
              class="growth-semester"
            >

              <strong>
                ${prettySemester(
                  sem
                )}
              </strong>


              <div
                class="growth-row"
              >

                <span>
                  CAT 1
                </span>

                <strong>

                  ${
                    s?.cat1Percentage ==
                    null
                      ? 'Not entered'
                      : Number(
                          s.cat1Percentage
                        ).toFixed(
                          2
                        ) + '%'
                  }

                </strong>

              </div>


              <div
                class="growth-row"
              >

                <span>
                  CAT 2
                </span>

                <strong>

                  ${
                    s?.cat2Percentage ==
                    null
                      ? 'Not entered'
                      : Number(
                          s.cat2Percentage
                        ).toFixed(
                          2
                        ) + '%'
                  }

                </strong>

              </div>


              <div
                class="growth-row"
              >

                <span>
                  Semester GPA
                </span>

                <strong>

                  ${
                    s?.gpa ==
                    null
                      ? 'Waiting for grades'
                      : Number(
                          s.gpa
                        ).toFixed(
                          2
                        )
                  }

                </strong>

              </div>

            </div>

          `

        }
      )
      .join('')

  panel.innerHTML = `

    <section
      class="hero-card pink"
    >

      <div>

        <p
          class="eyebrow"
        >
          I’m watching the numbers 👀
        </p>

        <h1>
          🌱
          ${ordinal(
            year
          )}
          Year Growth
        </h1>

        <p>
          Academic Race gives me
          the data.

          I give you the tea.
        </p>

      </div>


      <span
        class="big-icon"
      >
        🦋
      </span>

    </section>


    <div
      class="growth-tabs"
    >

      ${[
        1,
        2,
        3,
        4
      ]
        .map(
          (y) => `
            <button
              class="${
                year === y
                  ? 'active'
                  : ''
              }"
              data-growth-year="${y}"
            >

              ${ordinal(
                y
              )}

            </button>
          `
        )
        .join('')}

    </div>


    ${message}


    ${cards}


    ${evidence}


    <section
      class="academic-section"
    >

      <h2>
        📚 Semester-by-Semester
      </h2>

      ${semesters}

    </section>

  `

  panel
    .querySelectorAll(
      '[data-growth-year]'
    )
    .forEach(
      (button) =>
        button.onclick =
          () => {

            state.growthYear =
              Number(
                button.dataset
                  .growthYear
              )

            renderAcademicGrowth()

          }
    )
}

/* ============================================================
   SAVE / DELETE EVENTS
   ============================================================ */

function updateEventFormVisibility() {

  const form =
    $('event-form')

  const button =
    $('add-event-button')

  if (
    !form
  ) {

    return

  }

  form.classList.toggle(
    'hidden',
    !state.eventsFormOpen
  )

  if (
    button
  ) {

    button.textContent =
      state.eventsFormOpen
        ? '← My Events'
        : '➕ Add Event'

  }
}

function renderEvents() {

  const list =
    $('event-list')

  if (
    !list
  ) {

    return

  }

  ensureExtraStyles()

  const heading =
    list.parentElement
      ?.querySelector(
        '.section-heading'
      )

  if (
    heading &&
    !$('add-event-button')
  ) {

    const toolbar =
      document.createElement(
        'div'
      )

    toolbar.className =
      'event-elixir-toolbar'

    toolbar.innerHTML = `

      <div>

        <p
          class="eyebrow"
        >
          Your record book
        </p>

        <h2
          style="
            margin:0
          "
        >
          🏆 What I Participated In
        </h2>

      </div>


      <button
        type="button"
        id="add-event-button"
        class="save-main"
      >

        ➕ Add Event

      </button>

    `

    heading.replaceWith(
      toolbar
    )
  }

  updateEventFormVisibility()

  if (
    !state.events.length
  ) {

    list.innerHTML = `

      <div
        class="card empty-state"
      >

        No events recorded yet.

        Your shelf is waiting for
        its first spark ✨

        <br><br>

        Tap
        <strong>
          ➕ Add Event
        </strong>

        to store your first one.

      </div>

    `

    return

  }

  list.innerHTML =
    state.events
      .map(
        (event) => `

          <article
            class="event-card card"
          >

            <div
              class="event-date-badge"
            >

              <span>

                ${
                  new Date(
                    `${event.date}T00:00:00`
                  )
                    .toLocaleDateString(
                      'en-IN',
                      {
                        day:
                          '2-digit'
                      }
                    )
                }

              </span>


              <small>

                ${
                  new Date(
                    `${event.date}T00:00:00`
                  )
                    .toLocaleDateString(
                      'en-IN',
                      {
                        month:
                          'short'
                      }
                    )
                }

              </small>

            </div>


            <div
              class="event-main"
            >

              <div
                class="event-top"
              >

                <span
                  class="tag"
                >

                  ${escapeHtml(
                    event.type ||
                    'Other'
                  )}

                </span>


                ${
                  event.certificate
                    ? `
                      <span
                        class="
                          tag
                          soft
                        "
                      >
                        📜 Certificate
                      </span>
                    `
                    : ''
                }

              </div>


              <h3>

                ${escapeHtml(
                  event.name
                )}

              </h3>


              <p>

                ${escapeHtml(
                  event.organization ||
                  'Personal entry'
                )}

                ${
                  event.venue
                    ? `
                      ·
                      ${escapeHtml(
                        event.venue
                      )}
                    `
                    : ''
                }

              </p>


              ${
                event.result ||
                event.prize ||
                event.remarks

                  ? `
                    <div
                      class="
                        remarks-box
                      "
                    >

                      ${
                        event.result
                          ? `
                            <div>

                              <strong>
                                Result:
                              </strong>

                              ${escapeHtml(
                                event.result
                              )}

                            </div>
                          `
                          : ''
                      }


                      ${
                        event.prize
                          ? `
                            <div>

                              <strong>
                                Award:
                              </strong>

                              ${escapeHtml(
                                event.prize
                              )}

                            </div>
                          `
                          : ''
                      }


                      ${
                        event.remarks
                          ? `
                            <div>

                              <strong>
                                Remarks:
                              </strong>

                              ${escapeHtml(
                                event.remarks
                              )}

                            </div>
                          `
                          : ''
                      }

                    </div>
                  `
                  : ''
              }

            </div>


            <button

              class="icon-delete"

              data-delete-event="${attr(
                event.id
              )}"

              title="Delete event"

            >

              🗑️

            </button>

          </article>

        `
      )
      .join('')

  list
    .querySelectorAll(
      '[data-delete-event]'
    )
    .forEach(
      (button) =>
        button.onclick =
          async () => {

            try {

              await api(
                `/api/events/${button.dataset.deleteEvent}`,
                {
                  method:
                    'DELETE'
                }
              )

              state.events =
                state.events.filter(
                  (event) =>
                    event.id !==
                    button.dataset
                      .deleteEvent
                )

              renderEvents()

              showToast(
                'Event removed.'
              )

            } catch (
              error
            ) {

              showToast(
                error.message
              )

            }

          }
    )
}

function renderSaveDates() {

  const list =
    $('date-list')

  if (
    !list
  ) {

    return

  }

  if (
    !state.saveDates.length
  ) {

    list.innerHTML = `

      <div
        class="card empty-state"
      >

        Nothing on the horizon yet.
        Add your first date 🌷

      </div>

    `

    renderHomeUpcoming()

    return

  }

  const sorted =
    [...state.saveDates]
      .sort(
        (a, b) =>
          a.date.localeCompare(
            b.date
          )
      )

  list.innerHTML =
    sorted
      .map(
        (item) => {

          const d =
            daysLeft(
              item.date
            )

          const label =
            d < 0
              ? 'PAST'
              : d === 0
              ? 'TODAY'
              : d === 1
              ? 'TOMORROW'
              : `${d} DAYS LEFT`

          return `

            <article
              class="
                save-date-card
                card
                ${
                  d >= 0 &&
                  d <= 2
                    ? 'soon'
                    : ''
                }
              "
            >

              <div
                class="date-icon"
              >
                📅
              </div>


              <div
                class="save-date-main"
              >

                <div
                  class="event-top"
                >

                  <span
                    class="tag"
                  >
                    ${escapeHtml(
                      item.type ||
                      'Reminder'
                    )}
                  </span>


                  <span
                    class="count-chip"
                  >
                    ${label}
                  </span>

                </div>


                <h3>
                  ${escapeHtml(
                    item.title
                  )}
                </h3>


                <p>

                  ${prettyDate(
                    item.date
                  )}

                  ${
                    item.time
                      ? `
                        ·
                        ${escapeHtml(
                          item.time
                        )}
                      `
                      : ''
                  }

                  ${
                    item.venue
                      ? `
                        ·
                        ${escapeHtml(
                          item.venue
                        )}
                      `
                      : ''
                  }

                </p>


                ${
                  item.remarks
                    ? `
                      <div
                        class="remarks-box"
                      >

                        ${escapeHtml(
                          item.remarks
                        )}

                      </div>
                    `
                    : ''
                }

              </div>


              <button

                class="icon-delete"

                data-delete-date="${attr(
                  item.id
                )}"

                title="Delete saved date"

              >

                🗑️

              </button>

            </article>

          `

        }
      )
      .join('')

  list
    .querySelectorAll(
      '[data-delete-date]'
    )
    .forEach(
      (button) =>
        button.onclick =
          async () => {

            try {

              await api(
                `/api/save-dates/${button.dataset.deleteDate}`,
                {
                  method:
                    'DELETE'
                }
              )

              state.saveDates =
                state.saveDates.filter(
                  (d) =>
                    d.id !==
                    button.dataset
                      .deleteDate
                )

              renderSaveDates()

              showToast(
                'Saved date removed.'
              )

            } catch (
              error
            ) {

              showToast(
                error.message
              )

            }

          }
    )

  renderHomeUpcoming()
  renderCalendar()
}

/* ============================================================
   CALENDAR CONTROLS
   ============================================================ */

$('prev-month').onclick =
  () => {

    state.calendarCursor =
      new Date(
        state.calendarCursor
          .getFullYear(),

        state.calendarCursor
          .getMonth() -
          1,

        1
      )

    renderCalendar()
  }

$('next-month').onclick =
  () => {

    state.calendarCursor =
      new Date(
        state.calendarCursor
          .getFullYear(),

        state.calendarCursor
          .getMonth() +
          1,

        1
      )

    renderCalendar()
  }

/* ============================================================
   NAVIGATION
   ============================================================ */

document
  .querySelectorAll(
    '[data-nav]'
  )
  .forEach(
    (el) =>
      el.addEventListener(
        'click',
        () =>
          setView(
            el.dataset.nav
          )
      )
  )

/* ============================================================
   ACADEMIC BUTTONS
   ============================================================ */

$('open-academic').onclick =
  async () => {

    try {

      state.academic =
        await api(
          '/api/academic'
        )

      setView(
        'academic'
      )

      renderAcademic()

    } catch {

      showLock()

    }

  }

$('academic-lock').onclick =
  async () => {

    try {

      await api(
        '/api/academic/lock',
        {
          method:
            'POST'
        }
      )

      state.academic =
        null

      setView(
        'garden'
      )

      showToast(
        'Academic Garden locked 🔒'
      )

    } catch (
      error
    ) {

      showToast(
        error.message
      )

    }

  }

$('save-academic').onclick =
  saveAcademic

$('close-lock').onclick =
  hideLock

$('lock-form')
  .addEventListener(
    'submit',
    async (e) => {

      e.preventDefault()

      try {

        await unlockAcademic(
          $('lock-password')
            .value
        )

      } catch {

        $('lock-error')
          .textContent =
          'Could not unlock the Academic Garden.'

      }

    }
  )

/* ============================================================
   EVENT FORM
   ============================================================ */

$('event-form')
  .addEventListener(
    'submit',
    async (e) => {

      e.preventDefault()

      const form =
        new FormData(
          e.target
        )

      const payload =
        Object.fromEntries(
          form.entries()
        )

      payload.certificate =
        form.get(
          'certificate'
        ) ===
        'on'

      try {

        const created =
          await api(
            '/api/events',
            {
              method:
                'POST',

              body:
                JSON.stringify(
                  payload
                )
            }
          )

        state.events.unshift(
          created
        )

        e.target.reset()

        state.eventsFormOpen =
          false

        renderEvents()

        showToast(
          'Event added to your Elixir ✨'
        )

      } catch (
        error
      ) {

        showToast(
          error.message
        )

      }

    }
  )

/* ============================================================
   ADD EVENT BUTTON
   ============================================================ */

document.addEventListener(
  'click',
  (e) => {

    if (
      e.target &&
      e.target.id ===
      'add-event-button'
    ) {

      state.eventsFormOpen =
        !state.eventsFormOpen

      updateEventFormVisibility()

      if (
        state.eventsFormOpen
      ) {

        $('event-form')
          ?.scrollIntoView(
            {
              behavior:
                'smooth',

              block:
                'start'
            }
          )

      }

    }

  }
)

/* ============================================================
   SAVE DATE FORM
   ============================================================ */

$('date-form')
  .addEventListener(
    'submit',
    async (e) => {

      e.preventDefault()

      const form =
        new FormData(
          e.target
        )

      const payload =
        Object.fromEntries(
          form.entries()
        )

      payload.reminderDays =
        Number(
          payload.reminderDays ||
          0
        )

      try {

        const created =
          await api(
            '/api/save-dates',
            {
              method:
                'POST',

              body:
                JSON.stringify(
                  payload
                )
            }
          )

        state.saveDates.push(
          created
        )

        e.target.reset()

        renderSaveDates()

        showToast(
          'Saved to your date garden 📅'
        )

      } catch (
        error
      ) {

        showToast(
          error.message
        )

      }

    }
  )

/* ============================================================
   NOTIFICATIONS
   ============================================================ */

$('enable-notifications')
  .onclick =
  async () => {

    if (
      !(
        'Notification'
        in window
      )
    ) {

      return showToast(
        'This browser does not support notifications.'
      )

    }

    const result =
      await Notification
        .requestPermission()

    showToast(
      result ===
        'granted'
        ? 'Reminders enabled 🦋'
        : 'Notification permission was not granted.'
    )

  }

setInterval(
  () => {

    if (
      !(
        'Notification'
        in window
      ) ||
      Notification.permission !==
        'granted'
    ) {

      return

    }

    const now =
      new Date()

    for (
      const item of
      state.saveDates
    ) {

      const eventDate =
        new Date(
          `${item.date}T${
            item.time ||
            '09:00'
          }`
        )

      const reminderAt =
        new Date(
          eventDate.getTime() -
          Number(
            item.reminderDays ||
            0
          ) *
            86400000
        )

      const key =
        `pookie-notified-${
          item.id
        }-${
          item.date
        }-${
          item.time ||
          '09:00'
        }`

      if (
        now >=
          reminderAt &&
        now <
          new Date(
            eventDate.getTime() +
            86400000
          ) &&
        !localStorage.getItem(
          key
        )
      ) {

        new Notification(
          `${item.title} 🦋`,
          {
            body:
              `${prettyDate(
                item.date
              )}${
                item.time
                  ? ` at ${item.time}`
                  : ''
              }`
          }
        )

        localStorage.setItem(
          key,
          '1'
        )

      }

    }

  },
  60000
)

/* ============================================================
   ESCAPING
   ============================================================ */

function escapeHtml(
  value
) {

  return String(
    value ?? ''
  ).replace(
    /[&<>'"]/g,
    (c) =>
      ({
        '&':
          '&amp;',

        '<':
          '&lt;',

        '>':
          '&gt;',

        "'":
          '&#39;',

        '"':
          '&quot;'

      }[c])
  )

}

function attr(
  value
) {
  return escapeHtml(
    value
  )
}

/* ============================================================
   SERVICE WORKER
   ============================================================ */

if (
  'serviceWorker'
  in navigator
) {

  window.addEventListener(
    'load',
    () =>
      navigator.serviceWorker
        .register(
          '/sw.js'
        )
        .catch(
          () => {}
        )
  )

}

/* ============================================================
   INITIALISE
   ============================================================ */

ensureExtraStyles()

ensureAcademicGrowthView()

ensureAcademicGrowthTile()

/*
  Hide the Event Elixir form
  until Add Event is clicked.
*/
$('event-form')
  .classList
  .add(
    'hidden'
  )

loadPublicData()

renderHome()
