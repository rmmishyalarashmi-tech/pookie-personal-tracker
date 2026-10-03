/* ============================================================
   POOKIE PERSONAL TRACKER
   Complete app.js
   ============================================================ */

const $ = id => document.getElementById(id);

const state = {
  currentPage: "home",
  calendar: new Date(),
  currentYear: 1,
  currentSemester: 1,
  academicMode: "theory",
  academicEditMode: false,
  growthYear: 1,
  eventsFormOpen: false
};

const STORAGE = {
  events: "pookie_pwa_events",
  saveDates: "pookie_pwa_save_dates",
  academic: "pookie_pwa_academic",
  academicHistory: "pookie_pwa_academic_history"
};

const GRADE_POINTS = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  U: 0
};

const PROVERBS = [
  ["Little by little, a little becomes a lot.", "African Proverb"],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Fall seven times, stand up eight.", "Japanese Proverb"],
  ["Where there is a will, there is a way.", "Proverb"],
  ["A journey of a thousand miles begins with a single step.", "Lao Tzu"],
  ["Well begun is half done.", "Proverb"],
  ["Great things are done by a series of small things brought together.", "Vincent van Gogh"],
  ["Small steps every day.", "A little reminder 🌷"],
  ["Dreams do not work unless you do.", "John C. Maxwell"],
  ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe"],
  ["Success is the sum of small efforts, repeated day in and day out.", "Robert Collier"],
  ["The best preparation for tomorrow is doing your best today.", "H. Jackson Brown Jr."]
];

/* ============================================================
   CURRICULUM
   code, title, category, credits, section
   ============================================================ */

function course(code, title, category, credits, section = "theory") {
  return { code, title, category, credits, section };
}

const CURRICULUM = {
  1: {
    year: 1,
    name: "Semester I",
    courses: [
      course("EN3111", "Professional English – I", "HSMC", 3),
      course("MA3122", "Matrices and Calculus", "BSC", 4),
      course("PH3123", "Engineering Physics", "BSC", 3),
      course("CH3124", "Engineering Chemistry", "BSC", 3),
      course("GE3132", "Basic Electrical and Instrumentation Engineering", "ESC", 3),
      course("GE3111", "Heritage of Tamils / தமிழர்மரபு", "HSMC", 1),
      course("EN3119", "English Language Learning Laboratory", "HSMC", 1, "practical"),
      course("GE3121", "Physics and Chemistry Laboratory", "BSC", 2, "practical"),
      course("GE3134", "Engineering Practices Laboratory", "ESC", 2, "practical")
    ]
  },

  2: {
    year: 1,
    name: "Semester II",
    courses: [
      course("EN3211", "Professional English – II", "HSMC", 3),
      course("MA3222", "Statistics and Numerical Methods", "BSC", 4),
      course("PH3223", "Physics for Electronics Engineering", "BSC", 3),
      course("CH3223", "Chemistry of Electronic Materials", "BSC", 3),
      course("GE3231", "Problem Solving and Python Programming", "ESC", 3),
      course("GE3211", "Tamils and Technology / தமிழரும் தொழில்நுட்பமும்", "HSMC", 1),
      course("GE3233", "Engineering Graphics and Design", "ESC", 3),
      course("GE3221", "Engineering Sciences Laboratory", "BSC", 2, "practical"),
      course("GE3232", "Problem Solving and Python Programming Laboratory", "ESC", 2, "practical"),
      course("GE3251", "NSS / YRC / NSO / Club Activities", "PCD", 0)
    ]
  },

  3: {
    year: 2,
    name: "Semester III",
    courses: [
      course("MA3321", "Transforms and Partial Differential Equations", "BSC", 3),
      course("EC3362", "Solid State Devices and Circuits", "PCC", 3),
      course("EC3363", "Signals and Systems", "PCC", 3),
      course("EE3363", "Electric Circuit Analysis", "PCC", 3),
      course("EC3365", "Electromagnetic Fields", "PCC", 3),
      course("EC3366", "Digital Systems Design", "PCC", 4),
      course("EC3367", "Electronics Circuits Design Laboratory", "PCC", 1.5, "practical"),
      course("EE3369", "Circuits Theory and Electronic Devices Laboratory", "PCC", 1.5, "practical")
    ]
  },

  4: {
    year: 2,
    name: "Semester IV",
    courses: [
      course("MA3424", "Applied Mathematics for Electronics and Communication Engineering", "BSC", 2),
      course("EC3462", "Linear Integrated Circuits", "PCC", 3),
      course("EC3463", "Analog Communication", "PCC", 3),
      course("EC3464", "Microprocessors, Microcontrollers and Interfacing", "PCC", 3),
      course("EI3464", "Control Systems", "PCC", 3),
      course("GE3451", "NCC Credit Course Level - I", "PCD", 3),
      course("EC3465", "Digital Signal Processing", "PCC", 4),
      course("EC3466", "Linear IC and PCB Design Laboratory", "PCC", 1.5, "practical"),
      course("EC3467", "Microprocessors, Microcontrollers and Interfacing Laboratory", "PCC", 1.5, "practical")
    ]
  },

  5: {
    year: 3,
    name: "Semester V",
    courses: [
      course("EC3561", "Digital Communication", "PCC", 3),
      course("EC3562", "Transmission Lines and Waveguides", "PCC", 3),
      course("EC3563", "VLSI and Chip Design", "PCC", 3),
      course("PEC10X", "Professional Elective-I", "PEC", 3),
      course("PEC20X", "Professional Elective-II", "PEC", 3),
      course("CE3531", "Environmental Studies", "ESC", 2),
      course("GE3551", "NCC Credit Course Level-II", "PCD", 3),
      course("EC3564", "Embedded Systems and IoT Design", "PCC", 4),
      course("EC3566", "VLSI Laboratory", "PCC", 1.5, "practical"),
      course("EC3567", "Analog and Digital Communication Laboratory", "PCC", 1.5, "practical")
    ]
  },

  6: {
    year: 3,
    name: "Semester VI",
    courses: [
      course("EC3661", "Wireless Communication", "PCC", 3),
      course("EC3662", "Computer Networks and Security", "PCC", 3),
      course("EC3663", "Antennas and Wave Propagation", "PCC", 3),
      course("PEC30X", "Professional Elective-III", "PEC", 3),
      course("PXXX0X", "Professional Elective-IV", "PEC", 3),
      course("MAN10X", "Management Elective", "HSMC", 2),
      course("MXX10X", "Mandatory Course-I", "MC", 0),
      course("EC3664", "Wireless Communication and Networking Laboratory", "PCC", 1.5, "practical"),
      course("EC3645", "Mini Project", "EEC", 2, "practical"),
      course("EN3649", "Professional Communication Laboratory", "EEC", 1, "practical")
    ]
  },

  7: {
    year: 4,
    name: "Semester VII",
    courses: [
      course("EC3761", "Microwave and Optical Communication", "PCC", 3),
      course("PEC50X", "Professional Elective-V", "PEC", 3),
      course("PEC60X", "Professional Elective-VI", "PEC", 3),
      course("BA3711", "Human Values and Ethics", "HSMC", 2),
      course("OXXXXX", "Open Elective", "OEC", 3),
      course("MXX20X", "Mandatory Course-II", "MC", 0),
      course("EC3763", "Artificial Intelligence and Machine Learning Techniques", "PCC", 4),
      course("EC3764", "Microwave and Optical Communication Laboratory", "PCC", 1.5, "practical"),
      course("EC3745", "Internship", "EEC", 1, "practical")
    ]
  },

  8: {
    year: 4,
    name: "Semester VIII",
    courses: [
      course("EC3841", "Project Work", "EEC", 10, "practical")
    ]
  }
};

/* ============================================================
   STORAGE
   ============================================================ */

function safeJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

let events = safeJSON(STORAGE.events, []);
let saveDates = safeJSON(STORAGE.saveDates, []);
let academic = safeJSON(STORAGE.academic, {});
let academicHistory = safeJSON(STORAGE.academicHistory, []);

if (!Array.isArray(events)) events = [];
if (!Array.isArray(saveDates)) saveDates = [];
if (!academic || typeof academic !== "object" || Array.isArray(academic)) {
  academic = {};
}
if (!Array.isArray(academicHistory)) academicHistory = [];

function saveEvents() {
  localStorage.setItem(
    STORAGE.events,
    JSON.stringify(events)
  );
}

function saveDatesData() {
  localStorage.setItem(
    STORAGE.saveDates,
    JSON.stringify(saveDates)
  );
}

function saveAcademicData() {
  localStorage.setItem(
    STORAGE.academic,
    JSON.stringify(academic)
  );
}

function cloneAcademic() {
  return JSON.parse(
    JSON.stringify(academic)
  );
}

function snapshotKey(data) {
  return JSON.stringify(data);
}

function saveAcademicHistorySnapshot() {
  const data = cloneAcademic();
  const key = snapshotKey(data);
  const last =
    academicHistory[
      academicHistory.length - 1
    ];

  if (
    last &&
    snapshotKey(last.data || {}) === key
  ) {
    return;
  }

  academicHistory.push({
    timestamp:
      new Date().toISOString(),
    data
  });

  if (
    academicHistory.length >
    100
  ) {
    academicHistory =
      academicHistory.slice(-100);
  }

  localStorage.setItem(
    STORAGE.academicHistory,
    JSON.stringify(
      academicHistory
    )
  );
}

function academicHasData(
  data = academic
) {
  return Object.values(
    data
  ).some(
    record =>
      record &&
      (
        record.cat1 !== "" ||
        record.cat2 !== "" ||
        record.grade !== "" ||
        record.practicalGrade !== ""
      )
  );
}

function ensureAcademicHistoryBaseline() {
  if (
    !academicHistory.length &&
    academicHasData()
  ) {
    saveAcademicHistorySnapshot();
  }
}

/* ============================================================
   HELPERS
   ============================================================ */

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}

function toast(message) {
  const el = $("toast");

  if (!el) {
    return;
  }

  el.textContent =
    message;

  el.classList.add(
    "show"
  );

  clearTimeout(
    window.__pookieToast
  );

  window.__pookieToast =
    setTimeout(
      () =>
        el.classList.remove(
          "show"
        ),
      2400
    );
}

function localDateString(date) {
  return (
    `${date.getFullYear()}-` +
    `${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-` +
    `${String(
      date.getDate()
    ).padStart(2, "0")}`
  );
}

function parseDate(value) {
  return new Date(
    `${value}T00:00:00`
  );
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  return parseDate(
    value
  ).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );
}

function daysUntil(value) {
  const today = new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );

  const date =
    parseDate(value);

  date.setHours(
    0,
    0,
    0,
    0
  );

  return Math.round(
    (
      date -
      today
    ) /
    86400000
  );
}

function yearLabel(year) {
  return (
    year === 1
      ? "1st"
      : year === 2
      ? "2nd"
      : year === 3
      ? "3rd"
      : "4th"
  );
}

function getYearSemesters(year) {
  return Object.entries(
    CURRICULUM
  )
    .filter(
      ([, semester]) =>
        semester.year ===
        year
    )
    .map(
      ([semester]) =>
        Number(
          semester
        )
    );
}

function recordKey(
  semester,
  index
) {
  return `${semester}_${index}`;
}

function getRecord(
  semester,
  index
) {
  const key =
    recordKey(
      semester,
      index
    );

  if (
    !academic[key]
  ) {
    academic[key] = {
      cat1: "",
      cat2: "",
      grade: "",
      practicalGrade: ""
    };
  }

  return academic[key];
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function showPage(
  pageId
) {
  state.currentPage =
    pageId;

  document
    .querySelectorAll(
      ".page"
    )
    .forEach(
      page => {

        page.classList.toggle(
          "active",
          page.id ===
            pageId
        );

      }
    );

  document
    .querySelectorAll(
      ".bottom-nav button"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.page ===
            pageId
        );

      }
    );

  if (
    pageId ===
    "academic"
  ) {
    renderAcademic();
  }

  if (
    pageId ===
    "academicGrowth"
  ) {
    renderAcademicGrowth();
  }

  renderCalendars();
}

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-page]"
      );

    if (
      !button
    ) {
      return;
    }

    showPage(
      button.dataset.page
    );

  }
);

/* ============================================================
   HOME
   ============================================================ */

function renderHome() {
  const now =
    new Date();

  if (
    $("heroDate")
  ) {
    $("heroDate")
      .textContent =
      now.toLocaleDateString(
        "en-IN",
        {
          day:
            "numeric",
          month:
            "long"
        }
      );
  }

  if (
    $("heroDay")
  ) {
    $("heroDay")
      .textContent =
      now.toLocaleDateString(
        "en-IN",
        {
          weekday:
            "long"
        }
      );
  }

  const start =
    new Date(
      now.getFullYear(),
      0,
      0
    );

  const dayNumber =
    Math.floor(
      (
        now -
        start
      ) /
      86400000
    );

  const [
    quote,
    author
  ] =
    PROVERBS[
      dayNumber %
      PROVERBS.length
    ];

  if (
    $("dailyQuote")
  ) {
    $("dailyQuote")
      .textContent =
      `“${quote}”`;
  }

  if (
    $("quoteAuthor")
  ) {
    $("quoteAuthor")
      .textContent =
      `— ${author}`;
  }

  renderHomeDeadlines();
}

function renderHomeDeadlines() {
  const container =
    $("homeDeadlines");

  if (
    !container
  ) {
    return;
  }

  const upcoming =
    [...saveDates]
      .filter(
        item =>
          item.date &&
          daysUntil(
            item.date
          ) >= 0
      )
      .sort(
        (
          a,
          b
        ) =>
          String(
            a.date
          ).localeCompare(
            String(
              b.date
            )
          )
      )
      .slice(
        0,
        5
      );

  if (
    !upcoming.length
  ) {
    container.innerHTML =
      `<div class="empty">
        🌸 Nothing upcoming yet.<br>
        Add something to Save the Date.
      </div>`;

    return;
  }

  container.innerHTML =
    upcoming
      .map(
        item => {

          const d =
            daysUntil(
              item.date
            );

          const label =
            d === 0
              ? "TODAY 🎀"
              : d === 1
              ? "Tomorrow 🦋"
              : `${d} days left`;

          return `
            <div class="deadline-item">

              <div class="item-row">

                <div>

                  <div class="item-title">

                    ${escapeHtml(
                      item.title
                    )}

                  </div>

                  <div class="item-meta">

                    📅
                    ${formatDate(
                      item.date
                    )}

                    ${
                      item.time
                        ? `
                          · ⏰
                          ${escapeHtml(
                            item.time
                          )}
                        `
                        : ""
                    }

                  </div>

                </div>

                <span class="badge">

                  ${label}

                </span>

              </div>

            </div>
          `;

        }
      )
      .join("");
}

/* ============================================================
   SAVE THE DATE
   ============================================================ */

if (
  $("saveDateForm")
) {

  $("saveDateForm")
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const data =
          Object.fromEntries(
            new FormData(
              event.currentTarget
            ).entries()
          );

        if (
          !data.title ||
          !data.date
        ) {

          toast(
            "Title and date are required 🌷"
          );

          return;

        }

        saveDates.push({

          id:
            crypto.randomUUID(),

          title:
            data.title,

          type:
            data.type ||
            "",

          date:
            data.date,

          time:
            data.time ||
            "",

          venue:
            data.venue ||
            "",

          reminder:
            data.reminder ||
            "None",

          remarks:
            data.remarks ||
            "",

          createdAt:
            new Date()
              .toISOString()

        });

        saveDatesData();

        event.currentTarget
          .reset();

        renderSaveDates();

        renderHomeDeadlines();

        renderCalendars();

        toast(
          "Saved to your future garden 📅"
        );

      }
    );

}

function renderSaveDates() {

  const container =
    $("saveDatesList");

  if (
    !container
  ) {
    return;
  }

  const rows =
    [...saveDates]
      .sort(
        (
          a,
          b
        ) =>
          String(
            a.date
          ).localeCompare(
            String(
              b.date
            )
          )
      );

  if (
    !rows.length
  ) {

    container.innerHTML =
      `<div class="empty">
        📅 No future dates yet.<br>
        Add your first one. 🦋
      </div>`;

    return;
  }

  container.innerHTML =
    rows
      .map(
        item => {

          const d =
            daysUntil(
              item.date
            );

          const badge =
            d < 0
              ? "Past"
              : d === 0
              ? "TODAY 🎀"
              : d === 1
              ? "Tomorrow 🦋"
              : `${d} days`;

          return `
            <article class="event-item">

              <div class="item-row">

                <div>

                  <div class="item-title">

                    ${escapeHtml(
                      item.title
                    )}

                  </div>

                  <div class="item-meta">

                    📅
                    ${formatDate(
                      item.date
                    )}

                    ${
                      item.time
                        ? `
                          <br>
                          ⏰
                          ${escapeHtml(
                            item.time
                          )}
                        `
                        : ""
                    }

                    ${
                      item.venue
                        ? `
                          <br>
                          📍
                          ${escapeHtml(
                            item.venue
                          )}
                        `
                        : ""
                    }

                    ${
                      item.reminder &&
                      item.reminder !==
                        "None"
                        ? `
                          <br>
                          🔔
                          ${escapeHtml(
                            item.reminder
                          )}
                        `
                        : ""
                    }

                  </div>

                </div>

                <span class="badge">

                  ${badge}

                </span>

              </div>

              ${
                item.type
                  ? `
                    <div
                      style="
                        margin-top:8px
                      "
                    >

                      <span class="badge">

                        ${escapeHtml(
                          item.type
                        )}

                      </span>

                    </div>
                  `
                  : ""
              }

              ${
                item.remarks
                  ? `
                    <div class="remarks">

                      🌸
                      ${escapeHtml(
                        item.remarks
                      )}

                    </div>
                  `
                  : ""
              }

              <button

                class="danger-btn"

                style="
                  margin-top:10px
                "

                onclick=
                  "deleteSaveDate('${escapeHtml(item.id)}')"

              >

                Delete

              </button>

            </article>
          `;

        }
      )
      .join("");
}

window.deleteSaveDate =
  id => {

    saveDates =
      saveDates.filter(
        item =>
          item.id !==
          id
      );

    saveDatesData();

    renderSaveDates();

    renderHomeDeadlines();

    renderCalendars();

    toast(
      "Date removed 🌷"
    );

  };

/* ============================================================
   EVENTS ELIXIR
   ============================================================ */

function addEventsStyles() {

  if (
    $("pookieEventsStyles")
  ) {

    return;

  }

  const style =
    document.createElement(
      "style"
    );

  style.id =
    "pookieEventsStyles";

  style.textContent = `

    .events-view-header {

      display:
        flex;

      align-items:
        center;

      justify-content:
        space-between;

      gap:
        12px;

      margin:
        4px 0 14px;

      padding:
        14px;

      border-radius:
        20px;

      background:
        linear-gradient(
          135deg,
          #fff0f7,
          #fff8fb
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          .18
        );

    }


    .events-view-title {

      font-weight:
        800;

      font-size:
        18px;

    }


    .events-view-subtitle {

      margin-top:
        3px;

      font-size:
        12px;

      line-height:
        1.4;

      opacity:
        .72;

    }


    .events-add-button {

      flex-shrink:
        0;

      border:
        0;

      border-radius:
        14px;

      padding:
        11px 14px;

      background:
        #ff70a8;

      color:
        #fff;

      font:
        inherit;

      font-weight:
        700;

      cursor:
        pointer;

    }


    .events-history-title {

      margin:
        18px 0 8px;

      font-size:
        16px;

      font-weight:
        800;

    }


    .growth-icon-button {

      width:
        100%;

      min-height:
        120px;

      border:
        0;

      border-radius:
        24px;

      padding:
        16px;

      background:
        linear-gradient(
          135deg,
          #effff5,
          #fff7fb
        );

      font:
        inherit;

      cursor:
        pointer;

      text-align:
        center;

    }


    .growth-icon-big {

      display:
        block;

      font-size:
        38px;

      margin-bottom:
        5px;

    }


    .growth-note {

      display:
        block;

      margin-top:
        4px;

      font-size:
        12px;

      opacity:
        .72;

      line-height:
        1.45;

    }


    .pookie-growth-page {

      padding-bottom:
        120px;

    }


    .growth-year-tabs {

      display:
        grid;

      grid-template-columns:
        repeat(
          4,
          1fr
        );

      gap:
        8px;

      margin:
        15px 0;

    }


    .growth-year-tabs button {

      border:
        0;

      border-radius:
        16px;

      padding:
        11px 6px;

      background:
        rgba(
          255,
          255,
          255,
          .8
        );

      font:
        inherit;

      cursor:
        pointer;

    }


    .growth-year-tabs button.active {

      background:
        #ff70a8;

      color:
        white;

    }


    .growth-hero {

      border-radius:
        24px;

      padding:
        18px;

      margin-top:
        14px;

      background:
        linear-gradient(
          135deg,
          #fff0f7,
          #fff8fb
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          .22
        );

    }


    .growth-grid {

      display:
        grid;

      grid-template-columns:
        repeat(
          2,
          minmax(
            0,
            1fr
          )
        );

      gap:
        10px;

      margin-top:
        14px;

    }


    .growth-stat {

      border-radius:
        18px;

      padding:
        14px;

      background:
        rgba(
          255,
          255,
          255,
          .86
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          .16
        );

    }


    .growth-label {

      font-size:
        12px;

      opacity:
        .72;

      margin-bottom:
        5px;

    }


    .growth-value {

      font-size:
        24px;

      font-weight:
        800;

    }


    .growth-change {

      margin-top:
        7px;

      font-size:
        12px;

      line-height:
        1.45;

    }


    .growth-up {

      color:
        #168b56;

    }


    .growth-down {

      color:
        #c94b69;

    }


    .growth-neutral {

      color:
        #777;

    }


    .growth-semester {

      border-radius:
        20px;

      padding:
        15px;

      margin-top:
        12px;

      background:
        rgba(
          255,
          255,
          255,
          .84
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          .14
        );

    }


    .growth-semester-title {

      font-weight:
        800;

      margin-bottom:
        10px;

    }


    .growth-metric-row {

      display:
        grid;

      grid-template-columns:
        1fr auto;

      gap:
        10px;

      padding:
        8px 0;

      border-bottom:
        1px dashed
        rgba(
          0,
          0,
          0,
          .08
        );

    }


    .growth-metric-row:last-child {

      border-bottom:
        0;

    }


    .growth-message {

      margin-top:
        12px;

      padding:
        13px;

      border-radius:
        16px;

      background:
        #fff7fb;

      line-height:
        1.5;

      font-size:
        13px;

    }


    .growth-waiting {

      text-align:
        center;

      padding:
        24px 16px;

      margin-top:
        12px;

      border-radius:
        22px;

      background:
        linear-gradient(
          135deg,
          #fff8fb,
          #fff2f8
        );

    }

  `;

  document.head.appendChild(
    style
  );
}

function setupEventsElixir() {

  const form =
    $("eventForm");

  const list =
    $("eventsList");

  if (
    !form ||
    !list
  ) {

    return;

  }

  addEventsStyles();

  form.style.display =
    state.eventsFormOpen
      ? ""
      : "none";

  if (
    !$("eventsViewHeader")
  ) {

    const header =
      document.createElement(
        "div"
      );

    header.id =
      "eventsViewHeader";

    header.className =
      "events-view-header";

    header.innerHTML = `

      <div>

        <div
          class="events-view-title"
        >

          🏆 What I Participated In

        </div>

        <div
          class="events-view-subtitle"
        >

          Your completed events,
          competitions, symposiums
          and achievements live here. ✨

        </div>

      </div>


      <button

        type="button"

        id="eventsAddButton"

        class="events-add-button"

      >

        ➕ Add Event

      </button>

    `;

    list.parentNode
      .insertBefore(
        header,
        list
      );
  }

  const addButton =
    $("eventsAddButton");

  if (
    addButton &&
    !addButton.dataset.bound
  ) {

    addButton.dataset.bound =
      "yes";

    addButton.addEventListener(
      "click",
      () => {

        if (
          state.eventsFormOpen
        ) {

          closeEventForm();

        } else {

          openEventForm();

        }

      }
    );
  }

  updateEventsFormState();
}

function updateEventsFormState() {

  const form =
    $("eventForm");

  const button =
    $("eventsAddButton");

  if (
    !form
  ) {

    return;

  }

  form.style.display =
    state.eventsFormOpen
      ? ""
      : "none";

  if (
    button
  ) {

    button.textContent =
      state.eventsFormOpen
        ? "← My Events"
        : "➕ Add Event";

  }
}

function openEventForm() {

  state.eventsFormOpen =
    true;

  updateEventsFormState();

  const form =
    $("eventForm");

  if (
    form
  ) {

    setTimeout(
      () => {

        form.scrollIntoView({
          behavior:
            "smooth",
          block:
            "start"
        });

      },
      40
    );

  }
}

function closeEventForm() {

  state.eventsFormOpen =
    false;

  updateEventsFormState();
}

if (
  $("eventForm")
) {

  $("eventForm")
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const data =
          Object.fromEntries(
            new FormData(
              event.currentTarget
            ).entries()
          );

        if (
          !data.name ||
          !data.date
        ) {

          toast(
            "Event name and date are required ✨"
          );

          return;

        }

        events.push({

          id:
            crypto.randomUUID(),

          name:
            data.name,

          type:
            data.type ||
            "Event",

          date:
            data.date,

          time:
            data.time ||
            "",

          organization:
            data.organization ||
            "",

          venue:
            data.venue ||
            "",

          result:
            data.result ||
            "",

          prize:
            data.prize ||
            "",

          certificate:
            data.certificate ||
            "Not received",

          remarks:
            data.remarks ||
            "",

          createdAt:
            new Date()
              .toISOString()

        });

        saveEvents();

        event.currentTarget
          .reset();

        state.eventsFormOpen =
          false;

        updateEventsFormState();

        renderEvents();

        toast(
          "Event stored in Events Elixir ✨"
        );

      }
    );

}

function renderEvents() {

  const container =
    $("eventsList");

  if (
    !container
  ) {

    return;

  }

  setupEventsElixir();

  const rows =
    [...events]
      .sort(
        (
          a,
          b
        ) => {

          const dateCompare =
            String(
              b.date ||
              ""
            ).localeCompare(
              String(
                a.date ||
                ""
              )
            );

          if (
            dateCompare !==
            0
          ) {

            return dateCompare;

          }

          return String(
            b.createdAt ||
            ""
          ).localeCompare(
            String(
              a.createdAt ||
              ""
            )
          );

        }
      );

  if (
    !rows.length
  ) {

    container.innerHTML = `

      <div
        class="empty"
      >

        🌸

        <br><br>

        No participated events yet.

        <br><br>

        Your scrapbook is suspiciously empty.

        <br><br>

        Tap
        <strong>
          ➕ Add Event
        </strong>
        and give me some lore. 👀

      </div>

    `;

    return;

  }

  container.innerHTML = `

    <div
      class="events-history-title"
    >

      🏆 Your Participation History

    </div>


    <div
      class="muted"
      style="
        margin-bottom:10px
      "
    >

      ${rows.length}

      ${
        rows.length ===
        1
          ? "event"
          : "events"
      }

      recorded.

    </div>


    ${
      rows
        .map(
          item => `

            <article
              class="event-item"
            >

              <div
                class="item-row"
              >

                <div>

                  <div
                    class="item-title"
                  >

                    ${escapeHtml(
                      item.name
                    )}

                  </div>


                  <div
                    class="item-meta"
                  >

                    📅
                    ${formatDate(
                      item.date
                    )}

                    ${
                      item.time
                        ? `
                          <br>
                          ⏰
                          ${escapeHtml(
                            item.time
                          )}
                        `
                        : ""
                    }

                    ${
                      item.organization
                        ? `
                          <br>
                          🏫
                          ${escapeHtml(
                            item.organization
                          )}
                        `
                        : ""
                    }

                    ${
                      item.venue
                        ? `
                          <br>
                          📍
                          ${escapeHtml(
                            item.venue
                          )}
                        `
                        : ""
                    }

                    ${
                      item.result
                        ? `
                          <br>
                          🏆
                          ${escapeHtml(
                            item.result
                          )}
                        `
                        : ""
                    }

                    ${
                      item.prize
                        ? `
                          <br>
                          🥇
                          ${escapeHtml(
                            item.prize
                          )}
                        `
                        : ""
                    }

                    <br>

                    📜 Certificate:
                    ${escapeHtml(
                      item.certificate ||
                      "Not received"
                    )}

                  </div>

                </div>


                <span
                  class="badge"
                >

                  ${escapeHtml(
                    item.type ||
                    "Event"
                  )}

                </span>

              </div>


              ${
                item.remarks
                  ? `
                    <div
                      class="remarks"
                    >

                      🌸
                      ${escapeHtml(
                        item.remarks
                      )}

                    </div>
                  `
                  : ""
              }


              <button

                class="danger-btn"

                style="
                  margin-top:10px
                "

                onclick=
                  "deleteEvent('${escapeHtml(item.id)}')"

              >

                Delete

              </button>

            </article>

          `
        )
        .join("")
    }

  `;
}

window.deleteEvent =
  id => {

    events =
      events.filter(
        item =>
          item.id !==
          id
      );

    saveEvents();

    renderEvents();

    toast(
      "Event removed ✨"
    );

  };

/* ============================================================
   ACADEMIC PASSWORD / EDIT MODE
   ============================================================ */

const ACADEMIC_PASSWORD_HASH =
  "d7454f719b768b77c606671d597d084db552f3eeae178bdf6fa37b9e87b9d1ae";

async function sha256(value) {

  const buffer =
    await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder()
        .encode(
          value
        )
    );

  return Array
    .from(
      new Uint8Array(
        buffer
      )
    )
    .map(
      byte =>
        byte
          .toString(16)
          .padStart(
            2,
            "0"
          )
    )
    .join("");
}

function openLockModal() {

  const modal =
    $("lockModal");

  if (
    !modal
  ) {

    return;

  }

  modal.classList.add(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  if (
    $("passwordInput")
  ) {

    $("passwordInput")
      .value =
      "";

  }

  setTimeout(
    () =>
      $("passwordInput")
        ?.focus(),
    50
  );
}

function closeLockModal() {

  const modal =
    $("lockModal");

  if (
    !modal
  ) {

    return;

  }

  modal.classList.remove(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}

if (
  $("academicLockButton")
) {

  $("academicLockButton")
    .addEventListener(
      "click",
      () => {

        if (
          state.academicEditMode
        ) {

          finishAcademicEdit();

        } else {

          openLockModal();

        }

      }
    );

}

if (
  $("unlockFromAcademic")
) {

  $("unlockFromAcademic")
    .addEventListener(
      "click",
      openLockModal
    );

}

if (
  $("closeModal")
) {

  $("closeModal")
    .addEventListener(
      "click",
      closeLockModal
    );

}

if (
  $("lockModal")
) {

  $("lockModal")
    .addEventListener(
      "click",
      event => {

        if (
          event.target ===
          $("lockModal")
        ) {

          closeLockModal();

        }

      }
    );

}

if (
  $("unlockForm")
) {

  $("unlockForm")
    .addEventListener(
      "submit",
      async event => {

        event.preventDefault();

        try {

          const hash =
            await sha256(
              $("passwordInput")
                ?.value ||
              ""
            );

          if (
            hash !==
            ACADEMIC_PASSWORD_HASH
          ) {

            toast(
              "Incorrect password 🔐"
            );

            return;

          }

          state.academicEditMode =
            true;

          closeLockModal();

          renderAcademic();

          toast(
            "Academic editing unlocked 🦋"
          );

        } catch {

          toast(
            "Unable to unlock right now."
          );

        }

      }
    );

}

function finishAcademicEdit() {

  saveAcademicData();

  saveAcademicHistorySnapshot();

  state.academicEditMode =
    false;

  renderAcademic();

  if (
    state.currentPage ===
    "academicGrowth"
  ) {

    renderAcademicGrowth();

  }

  toast(
    "Academic editing locked 🔐"
  );
}

/* ============================================================
   ACADEMIC RACE
   ============================================================ */

function renderAcademic() {

  if (
    $("academicLocked")
  ) {

    $("academicLocked")
      .classList
      .add(
        "hidden"
      );

  }

  if (
    $("academicUnlocked")
  ) {

    $("academicUnlocked")
      .classList
      .remove(
        "hidden"
      );

  }

  if (
    !$("academicContent")
  ) {

    return;

  }

  const yearSemesters =
    getYearSemesters(
      state.currentYear
    );

  $("academicContent")
    .innerHTML = `

      <div
        class="academic-section"
      >

        <div
          class="academic-title-row"
        >

          <div>

            <h2
              style="
                margin:0
              "
            >

              🌱
              ${yearLabel(
                state.currentYear
              )}
              Year

            </h2>


            <div
              class="muted"
            >

              Your marks and grades are always visible.
              Editing requires your password.

            </div>

          </div>


          <div
            style="
              display:flex;
              align-items:center;
              gap:10px;
              flex-wrap:wrap;
              justify-content:flex-end
            "
          >

            <button

              id="academicEditButton"

              type="button"

              class="primary-btn"

              style="
                width:auto;
                padding:10px 14px
              "

            >

              ${
                state.academicEditMode
                  ? "🔒 Done Editing"
                  : "🔐 Edit Academic"
              }

            </button>


            <div
              style="
                font-size:30px
              "
            >

              🦋

            </div>

          </div>

        </div>


        <div
          class="semester-tabs"
          id="academicModeTabs"
          style="
            margin-top:15px
          "
        >

          <button

            data-mode="theory"

            class="${
              state.academicMode ===
              "theory"
                ? "active"
                : ""
            }"

          >

            📚 Theory

          </button>


          <button

            data-mode="practical"

            class="${
              state.academicMode ===
              "practical"
                ? "active"
                : ""
            }"

          >

            🧪 Practical

          </button>


          <button

            data-mode="cgpa"

            class="${
              state.academicMode ===
              "cgpa"
                ? "active"
                : ""
            }"

          >

            🏆 CGPA

          </button>

        </div>


        <div
          id="academicNested"
        ></div>

      </div>

    `;

  if (
    $("academicEditButton")
  ) {

    $("academicEditButton")
      .addEventListener(
        "click",
        () => {

          if (
            state.academicEditMode
          ) {

            finishAcademicEdit();

          } else {

            openLockModal();

          }

        }
      );

  }

  if (
    $("academicLockButton")
  ) {

    $("academicLockButton")
      .textContent =
      state.academicEditMode
        ? "🔒 Lock Academic"
        : "🔐 Edit Academic";

  }

  $("academicModeTabs")
    .addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-mode]"
          );

        if (
          !button
        ) {

          return;

        }

        state.academicMode =
          button.dataset.mode;

        renderAcademic();

      }
    );

  if (
    state.academicMode ===
    "theory"
  ) {

    renderTheory(
      yearSemesters
    );

  } else if (
    state.academicMode ===
    "practical"
  ) {

    renderPractical(
      yearSemesters
    );

  } else {

    renderCGPA();

  }

}

/* ============================================================
   ACADEMIC YEAR TABS
   ============================================================ */

if (
  $("yearTabs")
) {

  $("yearTabs")
    .addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-year]"
          );

        if (
          !button
        ) {

          return;

        }

        state.currentYear =
          Number(
            button.dataset.year
          );

        const semesters =
          getYearSemesters(
            state.currentYear
          );

        state.currentSemester =
          semesters[0];

        document
          .querySelectorAll(
            "#yearTabs button"
          )
          .forEach(
            item => {

              item.classList.toggle(
                "active",
                item ===
                  button
              );

            }
          );

        renderAcademic();

      }
    );

}

/* ============================================================
   THEORY
   ============================================================ */

function renderTheory(
  yearSemesters
) {

  const tabs =
    yearSemesters
      .map(
        semester => `

          <button

            data-semester="${semester}"

            class="${
              state.currentSemester ===
              semester
                ? "active"
                : ""
            }"

          >

            ${escapeHtml(
              CURRICULUM[
                semester
              ].name
            )}

          </button>

        `
      )
      .join("");

  $("academicNested")
    .innerHTML = `

      <section
        class="academic-section"
      >

        <h3
          style="
            margin:0
          "
        >

          📚 Theory

        </h3>


        <div
          class="muted"
        >

          CAT 1 and CAT 2 are each out of 100.
          Semester GPA also includes practical credits.

        </div>


        <div
          id="theorySemesterTabs"
          class="semester-tabs"
          style="
            margin-top:14px
          "
        >

          ${tabs}

        </div>


        <div
          id="theorySubjects"
        ></div>

      </section>

    `;

  $("theorySemesterTabs")
    .addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-semester]"
          );

        if (
          !button
        ) {

          return;

        }

        state.currentSemester =
          Number(
            button.dataset.semester
          );

        renderAcademic();

      }
    );

  renderTheorySubjects();
}

function renderTheorySubjects() {

  const semester =
    CURRICULUM[
      state.currentSemester
    ];

  const courses =
    semester.courses.filter(
      item =>
        item.section ===
        "theory"
    );

  const summary =
    calculateSemester(
      state.currentSemester
    );

  $("theorySubjects")
    .innerHTML =
      courses
        .map(
          item => {

            const index =
              semester.courses
                .indexOf(
                  item
                );

            const record =
              getRecord(
                state.currentSemester,
                index
              );

            const cat1 =
              record.cat1 ===
              ""
                ? null
                : Number(
                    record.cat1
                  );

            const cat2 =
              record.cat2 ===
              ""
                ? null
                : Number(
                    record.cat2
                  );

            return `

              <div
                class="subject-card"
              >

                <div
                  class="subject-code"
                >

                  ${escapeHtml(
                    item.code
                  )}

                </div>


                <div
                  class="subject-name"
                >

                  ${escapeHtml(
                    item.title
                  )}

                </div>


                <div
                  class="subject-meta"
                >

                  Category:
                  ${escapeHtml(
                    item.category
                  )}

                  · Credits:
                  ${item.credits}

                </div>


                <div
                  class="subject-fields"
                >

                  <label>

                    CAT 1

                    <span
                      style="
                        color:#ff70a8;
                        font-size:9px
                      "
                    >
                      /100
                    </span>


                    <input

                      type="number"

                      min="0"

                      max="100"

                      step="0.01"

                      value="${
                        cat1 ===
                        null
                          ? ""
                          : cat1
                      }"

                      ${
                        state.academicEditMode
                          ? ""
                          : "disabled"
                      }

                      data-index="${index}"

                      data-field="cat1"

                    >

                  </label>


                  <label>

                    CAT 2

                    <span
                      style="
                        color:#ff70a8;
                        font-size:9px
                      "
                    >
                      /100
                    </span>


                    <input

                      type="number"

                      min="0"

                      max="100"

                      step="0.01"

                      value="${
                        cat2 ===
                        null
                          ? ""
                          : cat2
                      }"

                      ${
                        state.academicEditMode
                          ? ""
                          : "disabled"
                      }

                      data-index="${index}"

                      data-field="cat2"

                    >

                  </label>


                  <label>

                    Semester Grade

                    <select

                      ${
                        state.academicEditMode
                          ? ""
                          : "disabled"
                      }

                      data-index="${index}"

                      data-field="grade"

                    >

                      ${gradeOptions(
                        record.grade
                      )}

                    </select>

                  </label>

                </div>


                <div
                  class="remarks"
                >

                  CAT 1:
                  ${
                    cat1 ===
                    null
                      ? "—"
                      : cat1.toFixed(
                          2
                        ) + "%"
                  }

                  &nbsp; · &nbsp;

                  CAT 2:
                  ${
                    cat2 ===
                    null
                      ? "—"
                      : cat2.toFixed(
                          2
                        ) + "%"
                  }

                </div>

              </div>

            `;

          }
        )
        .join("") +

      `

        <div
          class="academic-section"
        >

          <div
            class="calc-strip"
          >

            <div
              class="stat-box"
            >

              <div
                class="stat-label"
              >
                CAT 1
              </div>


              <div
                class="stat-value"
              >

                ${
                  summary
                    .cat1Percentage
                    .toFixed(2)
                }%

              </div>

            </div>


            <div
              class="stat-box"
            >

              <div
                class="stat-label"
              >
                CAT 2
              </div>


              <div
                class="stat-value"
              >

                ${
                  summary
                    .cat2Percentage
                    .toFixed(2)
                }%

              </div>

            </div>


            <div
              class="stat-box"
            >

              <div
                class="stat-label"
              >
                GPA
              </div>


              <div
                class="stat-value"
              >

                ${
                  summary
                    .gpa
                    .toFixed(2)
                }

              </div>

            </div>

          </div>


          ${
            state.academicEditMode

              ? `

                <button
                  id="saveTheory"
                  class="primary-btn"
                >

                  Save Theory 🌷

                </button>

              `

              : `

                <div
                  class="muted"
                  style="
                    text-align:center;
                    margin-top:10px
                  "
                >

                  🔒 Read-only.

                  Tap
                  <strong>
                    Edit Academic
                  </strong>
                  to make changes.

                </div>

              `
          }

        </div>

      `;

  bindAcademicInputs();

  if (
    $("saveTheory")
  ) {

    $("saveTheory")
      .addEventListener(
        "click",
        saveAcademic
      );

  }

}

/* ============================================================
   PRACTICAL
   ============================================================ */

function renderPractical(
  yearSemesters
) {

  const tabs =
    yearSemesters
      .map(
        semester => `

          <button

            data-semester="${semester}"

            class="${
              state.currentSemester ===
              semester
                ? "active"
                : ""
            }"

          >

            ${escapeHtml(
              CURRICULUM[
                semester
              ].name
            )}

          </button>

        `
      )
      .join("");

  $("academicNested")
    .innerHTML = `

      <section
        class="academic-section"
      >

        <h3
          style="
            margin:0
          "
        >

          🧪 Practical

        </h3>


        <div
          class="muted"
        >

          Practical grades use their
          preloaded credits in GPA calculations.

        </div>


        <div
          id="practicalSemesterTabs"
          class="semester-tabs"
          style="
            margin-top:14px
          "
        >

          ${tabs}

        </div>


        <div
          id="practicalSubjects"
        ></div>

      </section>

    `;

  $("practicalSemesterTabs")
    .addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-semester]"
          );

        if (
          !button
        ) {

          return;

        }

        state.currentSemester =
          Number(
            button.dataset.semester
          );

        renderAcademic();

      }
    );

  renderPracticalSubjects();
}

function renderPracticalSubjects() {

  const semester =
    CURRICULUM[
      state.currentSemester
    ];

  const courses =
    semester.courses.filter(
      item =>
        item.section ===
        "practical"
    );

  if (
    !courses.length
  ) {

    $("practicalSubjects")
      .innerHTML = `

        <div
          class="empty"
        >

          🌸 No practical courses
          in this semester.

        </div>

      `;

    return;

  }

  $("practicalSubjects")
    .innerHTML =
      courses
        .map(
          item => {

            const index =
              semester.courses
                .indexOf(
                  item
                );

            const record =
              getRecord(
                state.currentSemester,
                index
              );

            return `

              <div
                class="subject-card"
              >

                <div
                  class="subject-code"
                >

                  ${escapeHtml(
                    item.code
                  )}

                </div>


                <div
                  class="subject-name"
                >

                  ${escapeHtml(
                    item.title
                  )}

                </div>


                <div
                  class="subject-meta"
                >

                  Category:
                  ${escapeHtml(
                    item.category
                  )}

                  · Credits:
                  ${item.credits}

                </div>


                <div
                  class="subject-fields"
                  style="
                    grid-template-columns:1fr
                  "
                >

                  <label>

                    Practical Grade

                    <select

                      ${
                        state.academicEditMode
                          ? ""
                          : "disabled"
                      }

                      data-index="${index}"

                      data-field="practicalGrade"

                    >

                      ${gradeOptions(
                        record.practicalGrade
                      )}

                    </select>

                  </label>

                </div>

              </div>

            `;

          }
        )
        .join("") +

      `

        <div
          class="academic-section"
        >

          ${
            state.academicEditMode

              ? `

                <button
                  id="savePractical"
                  class="primary-btn"
                >

                  Save Practical 🧪

                </button>

              `

              : `

                <div
                  class="muted"
                  style="
                    text-align:center
                  "
                >

                  🔒 Read-only.

                  Tap
                  <strong>
                    Edit Academic
                  </strong>
                  to change practical grades.

                </div>

              `
          }

        </div>

      `;

  bindAcademicInputs();

  if (
    $("savePractical")
  ) {

    $("savePractical")
      .addEventListener(
        "click",
        saveAcademic
      );

  }

}

/* ============================================================
   CGPA
   ============================================================ */

function renderCGPA() {

  const year =
    state.currentYear;

  const semesters =
    getYearSemesters(
      year
    );

  const cgpa =
    calculateYearCGPA(
      year
    );

  $("academicNested")
    .innerHTML = `

      <section
        class="academic-section"
      >

        <div
          class="academic-title-row"
        >

          <div>

            <h3
              style="
                margin:0
              "
            >

              🏆
              ${yearLabel(
                year
              )}
              Year CGPA

            </h3>


            <div
              class="muted"
            >

              Calculated from the grades currently entered,
              including practical grades.

            </div>

          </div>


          <div
            style="
              font-size:30px
            "
          >

            🌷

          </div>

        </div>


        <div
          class="calc-strip"
          style="
            margin-top:14px
          "
        >

          ${
            semesters
              .map(
                semester => {

                  const result =
                    calculateSemester(
                      semester
                    );

                  return `

                    <div
                      class="stat-box"
                    >

                      <div
                        class="stat-label"
                      >

                        ${
                          escapeHtml(
                            CURRICULUM[
                              semester
                            ].name
                          )
                        }

                        GPA

                      </div>


                      <div
                        class="stat-value"
                      >

                        ${
                          result
                            .gpa
                            .toFixed(2)
                        }

                      </div>

                    </div>

                  `;

                }
              )
              .join("")
          }

        </div>


        <div
          class="calc-box"
        >

          <div
            class="stat-label"
          >

            ${yearLabel(
              year
            ).toUpperCase()}

            YEAR CGPA

          </div>


          <div
            class="calc-big"
          >

            ${cgpa.toFixed(
              2
            )}

          </div>

        </div>


        ${
          state.academicEditMode

            ? `

              <button
                id="saveCgpa"
                class="primary-btn"
              >

                Save Academic Data 🌷

              </button>

            `

            : `

              <div
                class="muted"
                style="
                  text-align:center;
                  margin-top:10px
                "
              >

                🔒 Academic data is
                currently read-only.

              </div>

            `
        }

      </section>

    `;

  if (
    $("saveCgpa")
  ) {

    $("saveCgpa")
      .addEventListener(
        "click",
        saveAcademic
      );

  }

}

function bindAcademicInputs() {

  document
    .querySelectorAll(
      "#academicNested [data-index]"
    )
    .forEach(
      input => {

        input.addEventListener(
          "change",
          event => {

            if (
              !state.academicEditMode
            ) {

              return;

            }

            const index =
              Number(
                event.target
                  .dataset
                  .index
              );

            const field =
              event.target
                .dataset
                .field;

            const record =
              getRecord(
                state.currentSemester,
                index
              );

            if (
              field ===
                "cat1" ||
              field ===
                "cat2"
            ) {

              const raw =
                event.target
                  .value
                  .trim();

              if (
                raw ===
                ""
              ) {

                record[field] =
                  "";

              } else {

                const number =
                  Number(
                    raw
                  );

                record[field] =
                  String(
                    Math.min(
                      Math.max(
                        Number.isFinite(
                          number
                        )
                          ? number
                          : 0,
                        0
                      ),
                      100
                    )
                  );

              }

            } else {

              record[field] =
                event.target.value;

            }

            saveAcademicData();

            saveAcademicHistorySnapshot();

            if (
              state.academicMode ===
              "theory"
            ) {

              renderTheorySubjects();

            }

          }
        );

      }
    );

}

/* ============================================================
   GPA CALCULATIONS
   ============================================================ */

function calculateSemester(
  semesterNumber,
  sourceAcademic = academic
) {

  const semester =
    CURRICULUM[
      semesterNumber
    ];

  let cat1Total =
    0;

  let cat2Total =
    0;

  let theorySubjects =
    0;

  let weighted =
    0;

  let gpaCredits =
    0;

  semester.courses
    .forEach(
      (
        item,
        index
      ) => {

        const record =
          sourceAcademic[
            recordKey(
              semesterNumber,
              index
            )
          ];

        if (
          !record
        ) {

          return;

        }

        const credit =
          Number(
            item.credits
          );

        if (
          !Number.isFinite(
            credit
          ) ||
          credit <=
            0
        ) {

          return;

        }

        if (
          item.section ===
          "theory"
        ) {

          theorySubjects++;

          const cat1 =
            Number(
              record.cat1
            );

          const cat2 =
            Number(
              record.cat2
            );

          if (
            Number.isFinite(
              cat1
            )
          ) {

            cat1Total +=
              Math.min(
                Math.max(
                  cat1,
                  0
                ),
                100
              );

          }

          if (
            Number.isFinite(
              cat2
            )
          ) {

            cat2Total +=
              Math.min(
                Math.max(
                  cat2,
                  0
                ),
                100
              );

          }

          const grade =
            record.grade;

          if (
            grade &&
            GRADE_POINTS[
              grade
            ] !== undefined
          ) {

            weighted +=
              GRADE_POINTS[
                grade
              ] *
              credit;

            gpaCredits +=
              credit;

          }

        }

        if (
          item.section ===
          "practical"
        ) {

          const grade =
            record.practicalGrade;

          if (
            grade &&
            GRADE_POINTS[
              grade
            ] !== undefined
          ) {

            weighted +=
              GRADE_POINTS[
                grade
              ] *
              credit;

            gpaCredits +=
              credit;

          }

        }

      }
    );

  return {

    cat1Percentage:
      theorySubjects
        ? cat1Total /
          theorySubjects
        : 0,

    cat2Percentage:
      theorySubjects
        ? cat2Total /
          theorySubjects
        : 0,

    gpa:
      gpaCredits
        ? weighted /
          gpaCredits
        : 0

  };

}

function calculateYearCGPA(
  year,
  sourceAcademic = academic
) {

  let weighted =
    0;

  let credits =
    0;

  Object.entries(
    CURRICULUM
  )
    .forEach(
      (
        [
          semesterNumber,
          semester
        ]
      ) => {

        if (
          semester.year !==
          year
        ) {

          return;

        }

        semester.courses
          .forEach(
            (
              item,
              index
            ) => {

              const record =
                sourceAcademic[
                  recordKey(
                    Number(
                      semesterNumber
                    ),
                    index
                  )
                ];

              if (
                !record
              ) {

                return;

              }

              const credit =
                Number(
                  item.credits
                );

              if (
                !Number.isFinite(
                  credit
                ) ||
                credit <=
                  0
              ) {

                return;

              }

              const grade =
                item.section ===
                "practical"
                  ? record.practicalGrade
                  : record.grade;

              if (
                !grade ||
                GRADE_POINTS[
                  grade
                ] === undefined
              ) {

                return;

              }

              weighted +=
                GRADE_POINTS[
                  grade
                ] *
                credit;

              credits +=
                credit;

            }
          );

      }
    );

  return credits
    ? weighted /
      credits
    : 0;
}

function saveAcademic() {

  saveAcademicData();

  saveAcademicHistorySnapshot();

  toast(
    "Academic data saved 🌷"
  );

  renderAcademic();

  if (
    state.currentPage ===
    "academicGrowth"
  ) {

    renderAcademicGrowth();

  }

}

/* ============================================================
   CALENDAR
   ============================================================ */

function renderCalendars() {

  if (
    $("miniCalendar") &&
    $("miniMonth")
  ) {

    renderCalendar(
      "miniCalendar",
      "miniMonth"
    );

  }

  if (
    $("fullCalendar") &&
    $("fullMonth")
  ) {

    renderCalendar(
      "fullCalendar",
      "fullMonth"
    );

  }

}

function renderCalendar(
  containerId,
  titleId
) {

  const container =
    $(containerId);

  const title =
    $(titleId);

  if (
    !container ||
    !title
  ) {

    return;

  }

  const year =
    state.calendar
      .getFullYear();

  const month =
    state.calendar
      .getMonth();

  const firstDay =
    new Date(
      year,
      month,
      1
    ).getDay();

  const days =
    new Date(
      year,
      month + 1,
      0
    ).getDate();

  const today =
    localDateString(
      new Date()
    );

  const dateSet =
    new Set(
      saveDates.map(
        item =>
          item.date
      )
    );

  title.textContent =
    state.calendar
      .toLocaleDateString(
        "en-IN",
        {
          month:
            "long",
          year:
            "numeric"
        }
      );

  container.innerHTML =
    "";

  for (
    let i = 0;
    i <
      firstDay;
    i++
  ) {

    const blank =
      document.createElement(
        "div"
      );

    blank.className =
      "calendar-empty";

    container.appendChild(
      blank
    );

  }

  for (
    let day = 1;
    day <=
      days;
    day++
  ) {

    const date =
      new Date(
        year,
        month,
        day
      );

    const key =
      localDateString(
        date
      );

    const cell =
      document.createElement(
        "div"
      );

    cell.className =
      `calendar-day${
        key ===
        today
          ? " today"
          : ""
      }${
        dateSet.has(
          key
        )
          ? " event"
          : ""
      }`;

    cell.textContent =
      day;

    cell.addEventListener(
      "click",
      () => {

        const items =
          saveDates.filter(
            item =>
              item.date ===
              key
          );

        toast(
          items.length
            ? items
                .map(
                  item =>
                    item.title
                )
                .join(
                  " · "
                )
            : "Nothing saved for this date 🌸"
        );

      }
    );

    container.appendChild(
      cell
    );

  }

}

function moveMonth(
  amount
) {

  state.calendar.setMonth(
    state.calendar.getMonth() +
    amount
  );

  renderCalendars();
}

if (
  $("miniPrev")
) {

  $("miniPrev")
    .addEventListener(
      "click",
      () =>
        moveMonth(
          -1
        )
    );

}

if (
  $("miniNext")
) {

  $("miniNext")
    .addEventListener(
      "click",
      () =>
        moveMonth(
          1
        )
    );

}

if (
  $("fullPrev")
) {

  $("fullPrev")
    .addEventListener(
      "click",
      () =>
        moveMonth(
          -1
        )
    );

}

if (
  $("fullNext")
) {

  $("fullNext")
    .addEventListener(
      "click",
      () =>
        moveMonth(
          1
        )
    );

}

/* ============================================================
   ACADEMIC GROWTH
   ============================================================ */

function getSemesterMetrics(
  semesterNumber,
  sourceAcademic = academic
) {

  const semester =
    CURRICULUM[
      semesterNumber
    ];

  let cat1Total =
    0;

  let cat1Count =
    0;

  let cat2Total =
    0;

  let cat2Count =
    0;

  let theoryGradeCount =
    0;

  let practicalGradeCount =
    0;

  semester.courses
    .forEach(
      (
        item,
        index
      ) => {

        const record =
          sourceAcademic[
            recordKey(
              semesterNumber,
              index
            )
          ];

        if (
          !record
        ) {

          return;

        }

        if (
          item.section ===
          "theory"
        ) {

          const cat1 =
            Number(
              record.cat1
            );

          const cat2 =
            Number(
              record.cat2
            );

          if (
            Number.isFinite(
              cat1
            )
          ) {

            cat1Total +=
              Math.min(
                Math.max(
                  cat1,
                  0
                ),
                100
              );

            cat1Count++;

          }

          if (
            Number.isFinite(
              cat2
            )
          ) {

            cat2Total +=
              Math.min(
                Math.max(
                  cat2,
                  0
                ),
                100
              );

            cat2Count++;

          }

          if (
            record.grade &&
            GRADE_POINTS[
              record.grade
            ] !== undefined
          ) {

            theoryGradeCount++;

          }

        }

        if (
          item.section ===
          "practical" &&
          record.practicalGrade &&
          GRADE_POINTS[
            record.practicalGrade
          ] !== undefined
        ) {

          practicalGradeCount++;

        }

      }
    );

  return {

    cat1:
      cat1Count
        ? cat1Total /
          cat1Count
        : null,

    cat2:
      cat2Count
        ? cat2Total /
          cat2Count
        : null,

    gpa:
      theoryGradeCount +
      practicalGradeCount >
      0
        ? calculateSemester(
            semesterNumber,
            sourceAcademic
          ).gpa
        : null,

    theoryGradeCount,

    practicalGradeCount,

    hasAnyData:
      cat1Count >
        0 ||
      cat2Count >
        0 ||
      theoryGradeCount >
        0 ||
      practicalGradeCount >
        0

  };

}

function growthClass(
  delta
) {

  if (
    delta ===
    null
  ) {

    return "growth-neutral";

  }

  if (
    delta >
    0.004
  ) {

    return "growth-up";

  }

  if (
    delta <
    -0.004
  ) {

    return "growth-down";

  }

  return "growth-neutral";
}

function growthComment(
  label,
  delta
) {

  if (
    delta ===
    null
  ) {

    return `
      🌱 ${label} has a baseline now.
      Make another update and I’ll
      start catching you in the act. 👀
    `;

  }

  const amount =
    Math.abs(
      delta
    ).toFixed(
      2
    );

  if (
    delta >
    0.004
  ) {

    return `
      🦋 ${label} increased by ${amount}.
      Sneaky improvement detected. 👀
    `;

  }

  if (
    delta <
    -0.004
  ) {

    return `
      🫣 ${label} decreased by ${amount}.
      The comeback department is open. 🌷
    `;

  }

  return `
    🌸 ${label} stayed almost the same.
    Holding the line.
  `;
}

function renderGrowthCard(
  label,
  value,
  previous,
  suffix = ""
) {

  const delta =
    value !==
      null &&
    previous !==
      null
      ? value -
        previous
      : null;

  const arrow =
    delta ===
    null
      ? "•"
      : delta >
        0.004
      ? "↑"
      : delta <
        -0.004
      ? "↓"
      : "→";

  const comparison =
    delta ===
    null
      ? "No previous value yet."
      : `${arrow} ${
          delta >
          0.004
            ? "Increased"
            : delta <
              -0.004
              ? "Decreased"
              : "Almost unchanged"
        } by ${
          Math.abs(
            delta
          ).toFixed(
            2
          )
        }`;

  return `

    <div
      class="growth-stat"
    >

      <div
        class="growth-label"
      >

        ${escapeHtml(
          label
        )}

      </div>


      <div
        class="growth-value"
      >

        ${
          value ===
          null
            ? "—"
            : value.toFixed(
                2
              ) +
              suffix
        }

      </div>


      <div
        class="
          growth-change
          ${growthClass(
            delta
          )}
        "
      >

        ${escapeHtml(
          comparison
        )}

      </div>

    </div>

  `;
}

function createAcademicGrowthPage() {

  if (
    $("academicGrowth")
  ) {

    return;

  }

  addEventsStyles();

  const page =
    document.createElement(
      "section"
    );

  page.id =
    "academicGrowth";

  page.className =
    "page pookie-growth-page";

  page.innerHTML = `

    <div
      class="academic-section"
    >

      <div
        class="academic-title-row"
      >

        <div>

          <h1
            style="
              margin:0
            "
          >

            🌱 Academic Growth

          </h1>


          <div
            class="muted"
          >

            Academic Race gives me the data.
            I give you the tea. 👀

          </div>

        </div>


        <div
          style="
            font-size:38px
          "
        >

          🦋

        </div>

      </div>


      <button

        type="button"

        class="primary-btn"

        style="
          width:auto;
          margin-top:12px
        "

        data-page="home"

      >

        ← Back to Garden

      </button>


      <div
        id="academicGrowthContent"
      ></div>

    </div>

  `;

  document.body.appendChild(
    page
  );
}

function renderAcademicGrowth() {

  ensureAcademicHistoryBaseline();

  createAcademicGrowthPage();

  const container =
    $("academicGrowthContent");

  if (
    !container
  ) {

    return;

  }

  const year =
    state.growthYear;

  const semesters =
    getYearSemesters(
      year
    );

  const currentData =
    semesters.map(
      semester => ({

        semester,

        data:
          getSemesterMetrics(
            semester,
            academic
          )

      })
    );

  const hasAnyData =
    currentData.some(
      item =>
        item.data
          .hasAnyData
    );

  const currentCgpaRaw =
    calculateYearCGPA(
      year,
      academic
    );

  const currentCgpa =
    currentCgpaRaw >
    0
      ? currentCgpaRaw
      : null;

  const previousSnapshot =
    academicHistory.length >=
    2
      ? academicHistory[
          academicHistory.length -
          2
        ]
      : null;

  const previousAcademic =
    previousSnapshot
      ? previousSnapshot.data
      : null;

  const previousCgpaRaw =
    previousAcademic
      ? calculateYearCGPA(
          year,
          previousAcademic
        )
      : 0;

  const previousCgpa =
    previousCgpaRaw >
    0
      ? previousCgpaRaw
      : null;

  let latest =
    null;

  for (
    let i =
      currentData.length -
      1;

    i >=
    0;

    i--
  ) {

    if (
      currentData[i]
        .data.hasAnyData
    ) {

      latest =
        currentData[i];

      break;

    }

  }

  const latestData =
    latest
      ? latest.data
      : null;

  const previousLatest =
    latest &&
    previousAcademic

      ? getSemesterMetrics(
          latest.semester,
          previousAcademic
        )

      : null;

  const latestCat1 =
    latestData
      ? latestData.cat1
      : null;

  const latestCat2 =
    latestData
      ? latestData.cat2
      : null;

  const latestGpa =
    latestData
      ? latestData.gpa
      : null;

  let story =
    "";

  if (
    !hasAnyData
  ) {

    story = `

      <div
        class="growth-waiting"
      >

        <div
          style="
            font-size:42px
          "
        >

          🦋

        </div>


        <strong>

          ${yearLabel(
            year
          )}
          Year is still waiting for
          your update.

        </strong>


        <div
          class="growth-note"
        >

          👀 I checked twice.

          Your marks are apparently
          hiding backstage.

          <br><br>

          “I can analyse your data.
          I cannot manufacture it.”

        </div>

      </div>

    `;

  }

  else if (
    latestData &&
    latestData.gpa ===
      null &&
    (
      latestData.cat1 !==
        null ||
      latestData.cat2 !==
        null
    )
  ) {

    story = `

      <div
        class="growth-message"
      >

        🌸

        <strong>
          CAT marks have entered the chat.
        </strong>

        <br><br>

        ${yearLabel(
          year
        )}

        Year currently has

        ${
          latestData.cat1 !==
          null
            ? "CAT 1 data"
            : ""
        }

        ${
          latestData.cat1 !==
            null &&
          latestData.cat2 !==
            null
            ? " and "
            : ""
        }

        ${
          latestData.cat2 !==
          null
            ? "CAT 2 data"
            : ""
        }.

        <br><br>

        👀 GPA is still backstage
        waiting for semester grades.

        The calculator refuses to
        invent one.

      </div>

    `;

  }

  else {

    story = `

      <div
        class="growth-message"
      >

        🦋

        <strong>
          I found academic activity.
        </strong>

        <br><br>

        ${yearLabel(
          year
        )}

        Year is no longer allowed
        to sneak past me unnoticed.

        ${
          latest
            ? `
              <br><br>
              Latest update spotted in
              <strong>
                ${
                  escapeHtml(
                    CURRICULUM[
                      latest.semester
                    ].name
                  )
                }
              </strong>.
            `
            : ""
        }

      </div>

    `;

  }

  const grid =
    hasAnyData
      ? `

        <div
          class="growth-grid"
        >

          ${renderGrowthCard(
            "Year CGPA",
            currentCgpa,
            previousCgpa
          )}


          ${renderGrowthCard(
            "Latest CAT 1",
            latestCat1,
            previousLatest
              ? previousLatest.cat1
              : null,
            "%"
          )}


          ${renderGrowthCard(
            "Latest CAT 2",
            latestCat2,
            previousLatest
              ? previousLatest.cat2
              : null,
            "%"
          )}


          ${renderGrowthCard(
            "Latest Semester GPA",
            latestGpa,
            previousLatest
              ? previousLatest.gpa
              : null
          )}

        </div>

      `
      : "";

  let evidence =
    "";

  if (
    previousAcademic &&
    latestData
  ) {

    const messages =
      [];

    if (
      latestCat1 !==
        null &&
      previousLatest?.cat1 !==
        null
    ) {

      messages.push(
        growthComment(
          "CAT 1",
          latestCat1 -
            previousLatest.cat1
        )
      );

    }

    if (
      latestCat2 !==
        null &&
      previousLatest?.cat2 !==
        null
    ) {

      messages.push(
        growthComment(
          "CAT 2",
          latestCat2 -
            previousLatest.cat2
        )
      );

    }

    if (
      latestGpa !==
        null &&
      previousLatest?.gpa !==
        null
    ) {

      messages.push(
        growthComment(
          "Semester GPA",
          latestGpa -
            previousLatest.gpa
        )
      );

    }

    if (
      currentCgpa !==
        null &&
      previousCgpa !==
        null
    ) {

      messages.push(
        growthComment(
          "Year CGPA",
          currentCgpa -
            previousCgpa
        )
      );

    }

    if (
      messages.length
    ) {

      evidence = `

        <div
          class="academic-section"
          style="
            margin-top:12px
          "
        >

          <h3
            style="
              margin:0
            "
          >

            🔎 The Evidence

          </h3>


          ${
            messages
              .map(
                message => `

                  <div
                    class="growth-message"
                  >

                    ${message}

                  </div>

                `
              )
              .join("")
          }

        </div>

      `;

    }

  }

  else if (
    hasAnyData
  ) {

    evidence = `

      <div
        class="growth-message"
      >

        🌱 Baseline established.

        I’ve got your first set of
        academic receipts.

        <br><br>

        Make your next update and
        I’ll tell you whether the
        numbers went up or down. 👀

      </div>

    `;

  }

  const semesterCards =
    currentData
      .map(
        item => {

          const data =
            item.data;

          const previous =
            previousAcademic
              ? getSemesterMetrics(
                  item.semester,
                  previousAcademic
                )
              : null;

          const cat1Delta =
            data.cat1 !== null &&
            previous?.cat1 !== null

              ? data.cat1 -
                previous.cat1

              : null;

          const cat2Delta =
            data.cat2 !== null &&
            previous?.cat2 !== null

              ? data.cat2 -
                previous.cat2

              : null;

          const gpaDelta =
            data.gpa !== null &&
            previous?.gpa !== null

              ? data.gpa -
                previous.gpa

              : null;

          const cat12Delta =
            data.cat1 !== null &&
            data.cat2 !== null

              ? data.cat2 -
                data.cat1

              : null;

          return `

            <div
              class="growth-semester"
            >

              <div
                class="growth-semester-title"
              >

                ${escapeHtml(
                  CURRICULUM[
                    item.semester
                  ].name
                )}

              </div>


              <div
                class="growth-metric-row"
              >

                <span>
                  CAT 1
                </span>


                <strong>

                  ${
                    data.cat1 ===
                    null
                      ? "Not entered"
                      : data.cat1.toFixed(
                          2
                        ) + "%"
                  }

                </strong>

              </div>


              <div
                class="growth-metric-row"
              >

                <span>
                  CAT 2
                </span>


                <strong>

                  ${
                    data.cat2 ===
                    null
                      ? "Not entered"
                      : data.cat2.toFixed(
                          2
                        ) + "%"
                  }

                </strong>

              </div>


              <div
                class="growth-metric-row"
              >

                <span>
                  Semester GPA
                </span>


                <strong>

                  ${
                    data.gpa ===
                    null
                      ? "Waiting for grades"
                      : data.gpa.toFixed(
                          2
                        )
                  }

                </strong>

              </div>


              <div
                class="growth-metric-row"
              >

                <span>
                  Practical grades
                </span>


                <strong>

                  ${
                    data
                      .practicalGradeCount
                  }

                  entered

                </strong>

              </div>


              ${
                cat1Delta !==
                null
                  ? `

                    <div
                      class="
                        growth-change
                        ${growthClass(
                          cat1Delta
                        )}
                      "
                    >

                      ${growthComment(
                        "CAT 1",
                        cat1Delta
                      )}

                    </div>

                  `
                  : ""
              }


              ${
                cat2Delta !==
                null
                  ? `

                    <div
                      class="
                        growth-change
                        ${growthClass(
                          cat2Delta
                        )}
                      "
                    >

                      ${growthComment(
                        "CAT 2",
                        cat2Delta
                      )}

                    </div>

                  `
                  : ""
              }


              ${
                gpaDelta !==
                null
                  ? `

                    <div
                      class="
                        growth-change
                        ${growthClass(
                          gpaDelta
                        )}
                      "
                    >

                      ${growthComment(
                        "GPA",
                        gpaDelta
                      )}

                    </div>

                  `
                  : ""
              }


              ${
                cat12Delta !==
                null
                  ? `

                    <div
                      class="
                        growth-change
                        ${growthClass(
                          cat12Delta
                        )}
                      "
                    >

                      ${
                        cat12Delta >
                        0.004

                          ? `
                            👀 CAT 2 improved by
                            <strong>
                              ${cat12Delta.toFixed(
                                2
                              )}
                            </strong>

                            points over CAT 1.
                            Somebody upgraded between rounds.
                          `

                          : cat12Delta <
                            -0.004

                            ? `
                              🫣 CAT 2 is down by
                              <strong>
                                ${
                                  Math.abs(
                                    cat12Delta
                                  ).toFixed(
                                    2
                                  )
                                }
                              </strong>

                              points from CAT 1.
                              The comeback arc is available.
                            `

                            : `
                              🌸 CAT 2 is almost the same as CAT 1.
                              Steady little academic creature.
                            `
                      }

                    </div>

                  `
                  : ""
              }

            </div>

          `;

        }
      )
      .join("");

  container.innerHTML = `

    <div
      class="growth-hero"
    >

      <h2
        style="
          margin:0
        "
      >

        ${yearLabel(
          year
        )}
        Year

      </h2>


      <div
        class="growth-note"
      >

        Your marks live in Academic Race.

        This little plant is here to
        notice the changes. 🌱👀

      </div>

    </div>


    <div
      class="growth-year-tabs"
    >

      ${
        [1,2,3,4]
          .map(
            item => `

              <button

                type="button"

                data-growth-year="${item}"

                class="${
                  state.growthYear ===
                  item
                    ? "active"
                    : ""
                }"

              >

                ${
                  item ===
                  1
                    ? "1st"
                    : item ===
                      2
                    ? "2nd"
                    : item ===
                      3
                    ? "3rd"
                    : "4th"
                }

              </button>

            `
          )
          .join("")
      }

    </div>


    ${story}


    ${grid}


    ${evidence}


    <div
      class="academic-section"
      style="
        margin-top:12px
      "
    >

      <h3
        style="
          margin:0
        "
      >

        📚 Semester-by-Semester

      </h3>


      <div
        class="muted"
      >

        CAT values are averages of
        entered theory marks.

        GPA uses theory and practical
        grades with the preloaded credits.

      </div>


      ${semesterCards}

    </div>

  `;

  document
    .querySelectorAll(
      "[data-growth-year]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            state.growthYear =
              Number(
                button.dataset
                  .growthYear
              );

            renderAcademicGrowth();

          }
        );

      }
    );
}

function createAcademicGrowthIcon() {

  if (
    $("openAcademicGrowth")
  ) {

    return;

  }

  const raceButton =
    $("openAcademicRace");

  if (
    !raceButton
  ) {

    return;

  }

  addEventsStyles();

  const button =
    document.createElement(
      "button"
    );

  button.id =
    "openAcademicGrowth";

  button.className =
    "growth-icon-button";

  button.innerHTML = `

    <span
      class="growth-icon-big"
    >

      🌱

    </span>


    <strong>

      Academic Growth

    </strong>


    <span
      class="growth-note"
    >

      Your marks have been talking.

      I’ve been listening. 👀

    </span>

  `;

  button.addEventListener(
    "click",
    () => {

      state.growthYear =
        state.currentYear;

      showPage(
        "academicGrowth"
      );

    }
  );

  raceButton
    .insertAdjacentElement(
      "afterend",
      button
    );

}

/* ============================================================
   INITIALISE
   ============================================================ */

addEventsStyles();

ensureAcademicHistoryBaseline();

createAcademicGrowthPage();

renderHome();

renderEvents();

renderSaveDates();

renderCalendars();

renderAcademic();

createAcademicGrowthIcon();

/* ============================================================
   SERVICE WORKER
   ============================================================ */

if (
  "serviceWorker"
  in navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register(
          "./service-worker.js?v=5",
          {
            updateViaCache:
              "none"
          }
        )
        .catch(
          error =>
            console.error(
              "Service worker registration failed:",
              error
            )
        );

    }
  );

}
