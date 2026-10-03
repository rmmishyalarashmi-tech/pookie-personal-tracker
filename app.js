/* ============================================================
   POOKIE PERSONAL TRACKER
   Offline-first PWA version
   ============================================================ */


/* ============================================================
   GLOBAL STATE
   ============================================================ */

const state = {

  currentPage: "home",

  calendar:
    new Date(),

  currentYear: 1,

  currentSemester: 1,

  academicMode:
    "theory",

  academicUnlocked:
    sessionStorage.getItem(
      "pookieAcademicUnlocked"
    ) === "yes"

};


/* ============================================================
   STORAGE KEYS
   ============================================================ */

const STORAGE = {

  events:
    "pookie_pwa_events",

  saveDates:
    "pookie_pwa_save_dates",

  academic:
    "pookie_pwa_academic"

};


/* ============================================================
   GRADE POINTS
   ============================================================ */

const GRADE_POINTS = {

  O: 10,

  "A+": 9,

  A: 8,

  "B+": 7,

  B: 6,

  C: 5,

  U: 0

};


/* ============================================================
   DAILY PROVERBS
   ============================================================ */

const PROVERBS = [

  [
    "Little by little, a little becomes a lot.",
    "African Proverb"
  ],

  [
    "The secret of getting ahead is getting started.",
    "Mark Twain"
  ],

  [
    "Fall seven times, stand up eight.",
    "Japanese Proverb"
  ],

  [
    "Where there is a will, there is a way.",
    "Proverb"
  ],

  [
    "A journey of a thousand miles begins with a single step.",
    "Lao Tzu"
  ],

  [
    "Well begun is half done.",
    "Proverb"
  ],

  [
    "Great things are done by a series of small things brought together.",
    "Vincent van Gogh"
  ],

  [
    "Small steps every day.",
    "A little reminder 🌷"
  ],

  [
    "Dreams do not work unless you do.",
    "John C. Maxwell"
  ],

  [
    "Start where you are. Use what you have. Do what you can.",
    "Arthur Ashe"
  ],

  [
    "Success is the sum of small efforts, repeated day in and day out.",
    "Robert Collier"
  ],

  [
    "The best preparation for tomorrow is doing your best today.",
    "H. Jackson Brown Jr."
  ]

];


/* ============================================================
   COMPLETE ECE CURRICULUM
   ============================================================ */

const CURRICULUM = {

  1: {

    year: 1,

    name: "Semester I",

    courses: [

      {
        code:
          "EN3111",

        title:
          "Professional English – I",

        category:
          "HSMC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "MA3122",

        title:
          "Matrices and Calculus",

        category:
          "BSC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "PH3123",

        title:
          "Engineering Physics",

        category:
          "BSC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "CH3124",

        title:
          "Engineering Chemistry",

        category:
          "BSC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3132",

        title:
          "Basic Electrical and Instrumentation Engineering",

        category:
          "ESC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3111",

        title:
          "Heritage of Tamils / தமிழர்மரபு",

        category:
          "HSMC",

        credits:
          1,

        section:
          "theory"

      },

      {
        code:
          "EN3119",

        title:
          "English Language Learning Laboratory",

        category:
          "HSMC",

        credits:
          1,

        section:
          "practical"

      },

      {
        code:
          "GE3121",

        title:
          "Physics and Chemistry Laboratory",

        category:
          "BSC",

        credits:
          2,

        section:
          "practical"

      },

      {
        code:
          "GE3134",

        title:
          "Engineering Practices Laboratory",

        category:
          "ESC",

        credits:
          2,

        section:
          "practical"

      }

    ]

  },


  2: {

    year: 1,

    name: "Semester II",

    courses: [

      {
        code:
          "EN3211",

        title:
          "Professional English – II",

        category:
          "HSMC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "MA3222",

        title:
          "Statistics and Numerical Methods",

        category:
          "BSC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "PH3223",

        title:
          "Physics for Electronics Engineering",

        category:
          "BSC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "CH3223",

        title:
          "Chemistry of Electronic Materials",

        category:
          "BSC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3231",

        title:
          "Problem Solving and Python Programming",

        category:
          "ESC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3211",

        title:
          "Tamils and Technology / தமிழரும் தொழில்நுட்பமும்",

        category:
          "HSMC",

        credits:
          1,

        section:
          "theory"

      },

      {
        code:
          "GE3233",

        title:
          "Engineering Graphics and Design",

        category:
          "ESC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3221",

        title:
          "Engineering Sciences Laboratory",

        category:
          "BSC",

        credits:
          2,

        section:
          "practical"

      },

      {
        code:
          "GE3232",

        title:
          "Problem Solving and Python Programming Laboratory",

        category:
          "ESC",

        credits:
          2,

        section:
          "practical"

      },

      {
        code:
          "GE3251",

        title:
          "NSS / YRC / NSO / Club Activities",

        category:
          "PCD",

        credits:
          0,

        section:
          "theory"

      }

    ]

  },


  3: {

    year: 2,

    name: "Semester III",

    courses: [

      {
        code:
          "MA3321",

        title:
          "Transforms and Partial Differential Equations",

        category:
          "BSC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3362",

        title:
          "Solid State Devices and Circuits",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3363",

        title:
          "Signals and Systems",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EE3363",

        title:
          "Electric Circuit Analysis",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3365",

        title:
          "Electromagnetic Fields",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3366",

        title:
          "Digital Systems Design",

        category:
          "PCC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "EC3367",

        title:
          "Electronics Circuits Design Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      },

      {
        code:
          "EE3369",

        title:
          "Circuits Theory and Electronic Devices Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      }

    ]

  },


  4: {

    year: 2,

    name: "Semester IV",

    courses: [

      {
        code:
          "MA3424",

        title:
          "Applied Mathematics for Electronics and Communication Engineering",

        category:
          "BSC",

        credits:
          2,

        section:
          "theory"

      },

      {
        code:
          "EC3462",

        title:
          "Linear Integrated Circuits",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3463",

        title:
          "Analog Communication",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3464",

        title:
          "Microprocessors, Microcontrollers and Interfacing",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EI3464",

        title:
          "Control Systems",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "GE3451",

        title:
          "NCC Credit Course Level - I",

        category:
          "PCD",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3465",

        title:
          "Digital Signal Processing",

        category:
          "PCC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "EC3466",

        title:
          "Linear IC and PCB Design Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      },

      {
        code:
          "EC3467",

        title:
          "Microprocessors, Microcontrollers and Interfacing Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      }

    ]

  },


  5: {

    year: 3,

    name: "Semester V",

    courses: [

      {
        code:
          "EC3561",

        title:
          "Digital Communication",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3562",

        title:
          "Transmission Lines and Waveguides",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3563",

        title:
          "VLSI and Chip Design",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PEC10X",

        title:
          "Professional Elective-I",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PEC20X",

        title:
          "Professional Elective-II",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "CE3531",

        title:
          "Environmental Studies",

        category:
          "ESC",

        credits:
          2,

        section:
          "theory"

      },

      {
        code:
          "GE3551",

        title:
          "NCC Credit Course Level-II",

        category:
          "PCD",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3564",

        title:
          "Embedded Systems and IoT Design",

        category:
          "PCC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "EC3566",

        title:
          "VLSI Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      },

      {
        code:
          "EC3567",

        title:
          "Analog and Digital Communication Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      }

    ]

  },


  6: {

    year: 3,

    name: "Semester VI",

    courses: [

      {
        code:
          "EC3661",

        title:
          "Wireless Communication",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3662",

        title:
          "Computer Networks and Security",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "EC3663",

        title:
          "Antennas and Wave Propagation",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PEC30X",

        title:
          "Professional Elective-III",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PXXX0X",

        title:
          "Professional Elective-IV",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "MAN10X",

        title:
          "Management Elective",

        category:
          "HSMC",

        credits:
          2,

        section:
          "theory"

      },

      {
        code:
          "MXX10X",

        title:
          "Mandatory Course-I",

        category:
          "MC",

        credits:
          0,

        section:
          "theory"

      },

      {
        code:
          "EC3664",

        title:
          "Wireless Communication and Networking Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      },

      {
        code:
          "EC3645",

        title:
          "Mini Project",

        category:
          "EEC",

        credits:
          2,

        section:
          "practical"

      },

      {
        code:
          "EN3649",

        title:
          "Professional Communication Laboratory",

        category:
          "EEC",

        credits:
          1,

        section:
          "practical"

      }

    ]

  },


  7: {

    year: 4,

    name: "Semester VII",

    courses: [

      {
        code:
          "EC3761",

        title:
          "Microwave and Optical Communication",

        category:
          "PCC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PEC50X",

        title:
          "Professional Elective-V",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "PEC60X",

        title:
          "Professional Elective-VI",

        category:
          "PEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "BA3711",

        title:
          "Human Values and Ethics",

        category:
          "HSMC",

        credits:
          2,

        section:
          "theory"

      },

      {
        code:
          "OXXXXX",

        title:
          "Open Elective",

        category:
          "OEC",

        credits:
          3,

        section:
          "theory"

      },

      {
        code:
          "MXX20X",

        title:
          "Mandatory Course-II",

        category:
          "MC",

        credits:
          0,

        section:
          "theory"

      },

      {
        code:
          "EC3763",

        title:
          "Artificial Intelligence and Machine Learning Techniques",

        category:
          "PCC",

        credits:
          4,

        section:
          "theory"

      },

      {
        code:
          "EC3764",

        title:
          "Microwave and Optical Communication Laboratory",

        category:
          "PCC",

        credits:
          1.5,

        section:
          "practical"

      },

      {
        code:
          "EC3745",

        title:
          "Internship",

        category:
          "EEC",

        credits:
          1,

        section:
          "practical"

      }

    ]

  },


  8: {

    year: 4,

    name: "Semester VIII",

    courses: [

      {
        code:
          "EC3841",

        title:
          "Project Work",

        category:
          "EEC",

        credits:
          10,

        section:
          "practical"

      }

    ]

  }

};


/* ============================================================
   HELPERS
   ============================================================ */

function $(id) {

  return document.getElementById(id);

}


function escapeHtml(value) {

  return String(
    value ?? ""
  )

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

  const element =
    $("toast");

  element.textContent =
    message;

  element.classList.add(
    "show"
  );

  clearTimeout(
    window.__pookieToast
  );

  window.__pookieToast =
    setTimeout(
      () => {

        element.classList.remove(
          "show"
        );

      },
      2400
    );

}


/* ============================================================
   STORAGE
   ============================================================ */

function loadEvents() {

  try {

    return JSON.parse(
      localStorage.getItem(
        STORAGE.events
      ) || "[]"
    );

  } catch {

    return [];

  }

}


function loadSaveDates() {

  try {

    return JSON.parse(
      localStorage.getItem(
        STORAGE.saveDates
      ) || "[]"
    );

  } catch {

    return [];

  }

}


function loadAcademic() {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(
          STORAGE.academic
        ) || "{}"
      );


    return value;

  } catch {

    return {};

  }

}


let events =
  loadEvents();


let saveDates =
  loadSaveDates();


let academic =
  loadAcademic();


function saveEvents() {

  localStorage.setItem(

    STORAGE.events,

    JSON.stringify(
      events
    )

  );

}


function saveDatesData() {

  localStorage.setItem(

    STORAGE.saveDates,

    JSON.stringify(
      saveDates
    )

  );

}


function saveAcademicData() {

  localStorage.setItem(

    STORAGE.academic,

    JSON.stringify(
      academic
    )

  );

}


/* ============================================================
   DATE HELPERS
   ============================================================ */

function localDateString(
  date
) {

  return (

    date.getFullYear() +
    "-" +

    String(
      date.getMonth() + 1
    ).padStart(
      2,
      "0"
    ) +

    "-" +

    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    )

  );

}


function parseDate(
  value
) {

  return new Date(
    `${value}T00:00:00`
  );

}


function formatDate(
  value
) {

  if (!value)
    return "";

  return parseDate(
    value
  ).toLocaleDateString(
    "en-IN",
    {
      day:
        "numeric",

      month:
        "long",

      year:
        "numeric"
    }
  );

}


function daysUntil(
  value
) {

  const today =
    new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );


  const date =
    parseDate(
      value
    );

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


  renderCalendars();

}


document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-page]"
      );


    if (!button)
      return;


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


  $("heroDay")
    .textContent =
      now.toLocaleDateString(
        "en-IN",
        {
          weekday:
            "long"
        }
      );


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


  $("dailyQuote")
    .textContent =
      `“${quote}”`;


  $("quoteAuthor")
    .textContent =
      `— ${author}`;


  renderHomeDeadlines();

}


/* ============================================================
   DEADLINES
   ============================================================ */

function renderHomeDeadlines() {

  const upcoming =
    [
      ...saveDates
    ]

      .filter(
        item =>
          daysUntil(
            item.date
          ) >= 0
      )

      .sort(
        (
          a,
          b
        ) =>
          a.date.localeCompare(
            b.date
          )
      )

      .slice(
        0,
        5
      );


  if (
    upcoming.length === 0
  ) {

    $("homeDeadlines")
      .innerHTML = `

        <div class="empty">

          🌸 Nothing upcoming yet.

          Add something to
          Save the Date.

        </div>

      `;

    return;

  }


  $("homeDeadlines")
    .innerHTML =

      upcoming
        .map(
          item => {

            const d =
              daysUntil(
                item.date
              );


            let label;


            if (
              d === 0
            ) {

              label =
                "TODAY 🎀";

            } else if (
              d === 1
            ) {

              label =
                "Tomorrow 🦋";

            } else {

              label =
                `${d} days left`;

            }


            return `

              <div
                class="deadline-item"
              >

                <div
                  class="item-row"
                >

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


                  <span
                    class="badge"
                  >

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
          data.type || "",

        date:
          data.date,

        time:
          data.time || "",

        venue:
          data.venue || "",

        reminder:
          data.reminder ||
          "None",

        remarks:
          data.remarks || "",

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


function renderSaveDates() {

  const container =
    $("saveDatesList");


  const rows =
    [
      ...saveDates
    ]
      .sort(
        (
          a,
          b
        ) =>
          a.date.localeCompare(
            b.date
          )
      );


  if (
    rows.length === 0
  ) {

    container.innerHTML = `

      <div class="empty">

        📅 No future dates yet.

        Add your first one. 🦋

      </div>

    `;

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


          let badge;


          if (
            d < 0
          ) {

            badge =
              "Past";

          } else if (
            d === 0
          ) {

            badge =
              "TODAY 🎀";

          } else if (
            d === 1
          ) {

            badge =
              "Tomorrow 🦋";

          } else {

            badge =
              `${d} days`;

          }


          return `

            <article
              class="event-item"
            >

              <div
                class="item-row"
              >

                <div>

                  <div class="item-title">

                    ${escapeHtml(
                      item.title
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
                          · ⏰
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


                <span
                  class="badge"
                >

                  ${badge}

                </span>

              </div>


              ${
                item.type

                  ? `
                    <div
                      style="margin-top:8px"
                    >

                      <span
                        class="badge"
                      >

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

                style="margin-top:10px"

                onclick=
                  "deleteSaveDate('${item.id}')"

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
  function(id) {

    saveDates =
      saveDates.filter(
        item =>
          item.id !== id
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


      renderEvents();


      toast(
        "Event added to Events Elixir ✨"
      );

    }
  );


function renderEvents() {

  const container =
    $("eventsList");


  const rows =
    [
      ...events
    ]

      .sort(
        (
          a,
          b
        ) =>
          b.date.localeCompare(
            a.date
          )
      );


  if (
    rows.length === 0
  ) {

    container.innerHTML = `

      <div class="empty">

        ✨ No events yet.

        Your journey starts here. 🌸

      </div>

    `;

    return;

  }


  container.innerHTML =

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
                        · ⏰
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
                    item.certificate
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

              style="margin-top:10px"

              onclick=
                "deleteEvent('${item.id}')"

            >

              Delete

            </button>

          </article>

        `
      )

      .join("");

}


window.deleteEvent =
  function(id) {

    events =
      events.filter(
        item =>
          item.id !== id
      );


    saveEvents();


    renderEvents();


    toast(
      "Event removed ✨"
    );

  };


/* ============================================================
   ACADEMIC LOCK
   ============================================================ */

const ACADEMIC_PASSWORD_HASH =
  "d7454f719b768b77c606671d597d084db552f3eeae178bdf6fa37b9e87b9d1ae";


async function sha256(
  value
) {

  const data =
    new TextEncoder()
      .encode(
        value
      );


  const buffer =
    await crypto.subtle.digest(
      "SHA-256",
      data
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

  $("lockModal")
    .classList
    .add("show");


  $("lockModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );


  $("passwordInput")
    .value = "";


  setTimeout(
    () =>
      $("passwordInput")
        .focus(),
    70
  );

}


function closeLockModal() {

  $("lockModal")
    .classList
    .remove("show");


  $("lockModal")
    .setAttribute(
      "aria-hidden",
      "true"
    );

}


$("academicLockButton")
  .addEventListener(
    "click",
    () => {

      if (
        state.academicUnlocked
      ) {

        lockAcademic();

      } else {

        openLockModal();

      }

    }
  );


$("unlockFromAcademic")
  .addEventListener(
    "click",
    openLockModal
  );


$("closeModal")
  .addEventListener(
    "click",
    closeLockModal
  );


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


$("unlockForm")
  .addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const entered =
        $("passwordInput")
          .value;


      try {

        const hash =
          await sha256(
            entered
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


        state.academicUnlocked =
          true;


        sessionStorage.setItem(
          "pookieAcademicUnlocked",
          "yes"
        );


        closeLockModal();


        renderAcademic();


        toast(
          "Academic Race unlocked 🦋"
        );

      } catch {

        toast(
          "Unable to unlock right now."
        );

      }

    }
  );


function lockAcademic() {

  state.academicUnlocked =
    false;


  sessionStorage.removeItem(
    "pookieAcademicUnlocked"
  );


  $("academicLocked")
    .classList
    .remove(
      "hidden"
    );


  $("academicUnlocked")
    .classList
    .add(
      "hidden"
    );


  toast(
    "Academic Race locked 🔐"
  );

}


/* ============================================================
   ACADEMIC RECORD HELPERS
   ============================================================ */

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

      cat1:
        "",

      cat2:
        "",

      grade:
        "",

      practicalGrade:
        ""

    };

  }


  return academic[key];

}


/* ============================================================
   ACADEMIC YEAR
   ============================================================ */

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
      )
        return;


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


function getYearSemesters(
  year
) {

  return Object.entries(
    CURRICULUM
  )

    .filter(
      ([_, semester]) =>
        semester.year ===
        year
    )

    .map(
      ([key]) =>
        Number(key)
    );

}


/* ============================================================
   ACADEMIC RENDER
   ============================================================ */

function renderAcademic() {

  if (
    !state.academicUnlocked
  ) {

    $("academicLocked")
      .classList
      .remove(
        "hidden"
      );


    $("academicUnlocked")
      .classList
      .add(
        "hidden"
      );


    return;

  }


  $("academicLocked")
    .classList
    .add(
      "hidden"
    );


  $("academicUnlocked")
    .classList
    .remove(
      "hidden"
    );


  const yearLabel =
    state.currentYear === 1
      ? "1st"
      : state.currentYear === 2
      ? "2nd"
      : state.currentYear === 3
      ? "3rd"
      : "4th";


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
              style="margin:0"
            >

              🌱
              ${yearLabel}
              Year

            </h2>

            <div class="muted">

              Choose Theory,
              Practical or CGPA.

            </div>

          </div>


          <div
            style="font-size:30px"
          >
            🦋
          </div>

        </div>


        <!-- NESTED SECTION -->

        <div
          class="semester-tabs"
          id="academicModeTabs"
          style="margin-top:15px"
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
        )
          return;


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

        <h3 style="margin:0">

          📚 Theory

        </h3>


        <div class="muted">

          Each subject has
          CAT 1 /100,
          CAT 2 /100 and
          Semester Grade.

        </div>


        <div
          id="theorySemesterTabs"
          class="semester-tabs"
          style="margin-top:14px"
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
        )
          return;


        state.currentSemester =
          Number(
            button.dataset.semester
          );


        renderAcademic();

      }
    );


  renderTheorySubjects();

}


/* ============================================================
   THEORY SUBJECTS
   ============================================================ */

function renderTheorySubjects() {

  const semester =
    CURRICULUM[
      state.currentSemester
    ];


  const courses =
    semester.courses.filter(
      course =>
        course.section ===
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
          course => {

            const index =
              semester.courses
                .indexOf(
                  course
                );


            const record =
              getRecord(
                state.currentSemester,
                index
              );


            const cat1 =
              Number(
                record.cat1
              ) || 0;


            const cat2 =
              Number(
                record.cat2
              ) || 0;


            return `

              <div
                class="subject-card"
              >

                <div
                  class="subject-code"
                >

                  ${escapeHtml(
                    course.code
                  )}

                </div>


                <div
                  class="subject-name"
                >

                  ${escapeHtml(
                    course.title
                  )}

                </div>


                <div
                  class="subject-meta"
                >

                  Category:
                  ${escapeHtml(
                    course.category
                  )}

                  ·

                  Credits:
                  ${course.credits}

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
                        cat1
                      }"

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
                        cat2
                      }"

                      data-index="${index}"

                      data-field="cat2"

                    >

                  </label>


                  <label>

                    Semester Grade

                    <select

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
                  ${cat1.toFixed(2)}%

                  &nbsp; · &nbsp;

                  CAT 2:
                  ${cat2.toFixed(2)}%

                </div>

              </div>

            `;

          }
        )

        .join("") + `


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
                  id="liveCat1"
                  class="stat-value"
                >

                  ${
                    summary.cat1Percentage
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
                  id="liveCat2"
                  class="stat-value"
                >

                  ${
                    summary.cat2Percentage
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
                  id="liveGpa"
                  class="stat-value"
                >

                  ${
                    summary.gpa
                      .toFixed(2)
                  }

                </div>

              </div>

            </div>


            <button
              id="saveTheory"
              class="primary-btn"
            >

              Save Theory 🌷

            </button>

          </div>

        `;


  bindAcademicInputs();


  $("saveTheory")
    .addEventListener(
      "click",
      saveAcademic
    );

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

        <h3 style="margin:0">

          🧪 Practical

        </h3>


        <div class="muted">

          Practical subjects use
          their preloaded credits.

        </div>


        <div
          id="practicalSemesterTabs"
          class="semester-tabs"
          style="margin-top:14px"
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
        )
          return;


        state.currentSemester =
          Number(
            button.dataset.semester
          );


        renderAcademic();

      }
    );


  renderPracticalSubjects();

}


/* ============================================================
   PRACTICAL SUBJECTS
   ============================================================ */

function renderPracticalSubjects() {

  const semester =
    CURRICULUM[
      state.currentSemester
    ];


  const courses =
    semester.courses.filter(
      course =>
        course.section ===
        "practical"
    );


  if (
    courses.length ===
    0
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
          course => {

            const index =
              semester.courses
                .indexOf(
                  course
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
                    course.code
                  )}

                </div>


                <div
                  class="subject-name"
                >

                  ${escapeHtml(
                    course.title
                  )}

                </div>


                <div
                  class="subject-meta"
                >

                  Category:
                  ${escapeHtml(
                    course.category
                  )}

                  ·

                  Credits:
                  ${course.credits}

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
        .join("") + `


          <div
            class="academic-section"
          >

            <button
              id="savePractical"
              class="primary-btn"
            >

              Save Practical 🧪

            </button>

          </div>

        `;


  bindAcademicInputs();


  $("savePractical")
    .addEventListener(
      "click",
      saveAcademic
    );

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
              style="margin:0"
            >

              🏆 Year CGPA

            </h3>


            <div class="muted">

              Theory semester grades
              + practical grades,
              weighted by their credits.

            </div>

          </div>


          <div
            style="font-size:30px"
          >
            🌷
          </div>

        </div>


        <div
          class="calc-strip"
          style="margin-top:14px"
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

            ${
              year === 1
                ? "1st"
                : year === 2
                ? "2nd"
                : year === 3
                ? "3rd"
                : "4th"
            }

            YEAR CGPA

          </div>


          <div
            class="calc-big"
          >

            ${cgpa.toFixed(2)}

          </div>

        </div>


        <button
          id="saveCgpa"
          class="primary-btn"
        >

          Save Academic Data 🌷

        </button>

      </section>

    `;


  $("saveCgpa")
    .addEventListener(
      "click",
      saveAcademic
    );

}


/* ============================================================
   GRADE OPTIONS
   ============================================================ */

function gradeOptions(
  selected
) {

  const grades = [

    "",

    "O",

    "A+",

    "A",

    "B+",

    "B",

    "C",

    "U"

  ];


  return grades
    .map(
      grade => `

        <option

          value="${grade}"

          ${
            selected === grade
              ? "selected"
              : ""
          }

        >

          ${
            grade ||
            "Select grade"
          }

        </option>

      `
    )
    .join("");

}


/* ============================================================
   ACADEMIC INPUTS
   ============================================================ */

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

              const number =
                Number(
                  event.target.value
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

            } else {

              record[field] =
                event.target.value;

            }


            saveAcademicData();


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
   SEMESTER CALCULATION
   ============================================================ */

function calculateSemester(
  semesterNumber
) {

  const semester =
    CURRICULUM[
      semesterNumber
    ];


  let cat1Total = 0;

  let cat2Total = 0;

  let theorySubjects =
    0;


  let weighted =
    0;

  let gpaCredits =
    0;


  semester.courses
    .forEach(
      (
        course,
        index
      ) => {

        const record =
          academic[
            recordKey(
              semesterNumber,
              index
            )
          ];


        if (!record)
          return;


        const credit =
          Number(
            course.credits
          );


        if (
          !Number.isFinite(
            credit
          ) ||
          credit <= 0
        )
          return;


        /* ---------------------------
           THEORY
           --------------------------- */

        if (
          course.section ===
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


        /* ---------------------------
           PRACTICAL
           --------------------------- */

        else if (
          course.section ===
          "practical"
        ) {

          const practicalGrade =
            record.practicalGrade;


          if (
            practicalGrade &&
            GRADE_POINTS[
              practicalGrade
            ] !== undefined
          ) {

            weighted +=
              GRADE_POINTS[
                practicalGrade
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


/* ============================================================
   YEAR CGPA
   ============================================================ */

function calculateYearCGPA(
  year
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
        )
          return;


        semester.courses
          .forEach(
            (
              course,
              index
            ) => {

              const record =
                academic[
                  recordKey(
                    Number(
                      semesterNumber
                    ),
                    index
                  )
                ];


              if (!record)
                return;


              const credit =
                Number(
                  course.credits
                );


              if (
                !Number.isFinite(
                  credit
                ) ||
                credit <= 0
              )
                return;


              const grade =
                course.section ===
                "practical"

                  ? record
                      .practicalGrade

                  : record.grade;


              if (
                !grade ||
                GRADE_POINTS[
                  grade
                ] === undefined
              )
                return;


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


/* ============================================================
   SAVE ACADEMIC
   ============================================================ */

function saveAcademic() {

  saveAcademicData();


  toast(
    "Academic data saved 🌷"
  );


  renderAcademic();

}


/* ============================================================
   CALENDAR
   ============================================================ */

function renderCalendars() {

  renderCalendar(
    "miniCalendar",
    "miniMonth"
  );


  renderCalendar(
    "fullCalendar",
    "fullMonth"
  );

}


function renderCalendar(
  containerId,
  titleId
) {

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


  const eventDates =
    new Set(
      saveDates.map(
        item =>
          item.date
      )
    );


  $(titleId)
    .textContent =
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


  const container =
    $(containerId);


  container.innerHTML =
    "";


  for (
    let i = 0;
    i < firstDay;
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
    day <= days;
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
      "calendar-day" +

      (
        key ===
        today
          ? " today"
          : ""
      ) +

      (
        eventDates.has(
          key
        )
          ? " event"
          : ""
      );


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


        if (
          items.length === 0
        ) {

          toast(
            "Nothing saved for this date 🌸"
          );

          return;

        }


        toast(
          items
            .map(
              item =>
                item.title
            )
            .join(
              " · "
            )
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

  state.calendar
    .setMonth(
      state.calendar
        .getMonth() +
      amount
    );


  renderCalendars();

}


$("miniPrev")
  .addEventListener(
    "click",
    () =>
      moveMonth(-1)
  );


$("miniNext")
  .addEventListener(
    "click",
    () =>
      moveMonth(1)
  );


$("fullPrev")
  .addEventListener(
    "click",
    () =>
      moveMonth(-1)
  );


$("fullNext")
  .addEventListener(
    "click",
    () =>
      moveMonth(1)
  );


/* ============================================================
   ACADEMIC GARDEN ENTRY
   ============================================================ */

$("openAcademicRace")
  .addEventListener(
    "click",
    () => {

      showPage(
        "academic"
      );


      renderAcademic();

    }
  );


/* ============================================================
   PWA SERVICE WORKER
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
          "./service-worker.js"
        )

        .catch(
          error => {

            console.error(
              "Service worker registration failed:",
              error
            );

          }
        );

    }
  );

}


/* ============================================================
   INITIAL LOAD
   ============================================================ */

renderHome();

renderEvents();

renderSaveDates();

renderCalendars();

renderAcademic();
