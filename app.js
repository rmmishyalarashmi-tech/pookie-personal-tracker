/* ============================================================
   POOKIE PERSONAL TRACKER
   Offline-first PWA version
   ============================================================ */


/* ============================================================
   GLOBAL STATE
   ============================================================ */

const state = {

  currentPage:
    "home",

  calendar:
    new Date(),

  currentYear:
    1,

  currentSemester:
    1,

  academicMode:
    "theory",

  academicEditMode:
    false,

  growthYear:
    1,

  eventsFormOpen:
    false

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

  O:
    10,

  "A+":
    9,

  A:
    8,

  "B+":
    7,

  B:
    6,

  C:
    5,

  U:
    0

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

    year:
      1,

    name:
      "Semester I",

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

    year:
      1,

    name:
      "Semester II",

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

    year:
      2,

    name:
      "Semester III",

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

    year:
      2,

    name:
      "Semester IV",

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

    year:
      3,

    name:
      "Semester V",

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

    year:
      3,

    name:
      "Semester VI",

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

    year:
      4,

    name:
      "Semester VII",

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

    year:
      4,

    name:
      "Semester VIII",

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

  return document.getElementById(
    id
  );

}


function escapeHtml(
  value
) {

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


function toast(
  message
) {

  const element =
    $("toast");

  if (
    !element
  )
    return;


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

    return JSON.parse(
      localStorage.getItem(
        STORAGE.academic
      ) || "{}"
    );

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

  if (
    !value
  )
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


  if (
    pageId ===
    "academicGrowth"
  ) {

    renderAcademicGrowth();

  }


  renderCalendars();

}


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


/* ============================================================
   DEADLINES
   ============================================================ */

function renderHomeDeadlines() {

  if (
    !$("homeDeadlines")
  )
    return;


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
    upcoming.length ===
    0
  ) {

    $("homeDeadlines")
      .innerHTML = `

        <div
          class="empty"
        >

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
            d ===
            0
          ) {

            label =
              "TODAY 🎀";

          }

          else if (
            d ===
            1
          ) {

            label =
              "Tomorrow 🦋";

          }

          else {

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

                  <div
                    class="item-title"
                  >

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

  if (
    !$("saveDatesList")
  )
    return;


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
    rows.length ===
    0
  ) {

    $("saveDatesList")
      .innerHTML = `

        <div
          class="empty"
        >

          📅 No future dates yet.

          Add your first one. 🦋

        </div>

      `;

    return;

  }


  $("saveDatesList")
    .innerHTML =

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

          }

          else if (
            d ===
            0
          ) {

            badge =
              "TODAY 🎀";

          }

          else if (
            d ===
            1
          ) {

            badge =
              "Tomorrow 🦋";

          }

          else {

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

                  <div
                    class="item-title"
                  >

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
                      style="
                        margin-top:8px
                      "
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


/*
   New behaviour:

   1. Existing participated events are shown first.
   2. Add Event button stays at the top.
   3. Form is hidden when opening Events Elixir.
   4. Form appears only after tapping Add Event.
   5. After saving, form closes automatically.
*/


function createEventsStyles() {

  if (
    $("eventsDynamicStyles")
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "eventsDynamicStyles";


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
          0.18
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
        0.72;

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
        white;

      font:
        inherit;

      font-weight:
        700;

      cursor:
        pointer;

      box-shadow:
        0 7px 18px
        rgba(
          255,
          112,
          168,
          0.22
        );

    }


    .events-form-box {

      margin-bottom:
        14px;

      padding:
        14px;

      border-radius:
        20px;

      background:
        rgba(
          255,
          255,
          255,
          0.85
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          0.16
        );

    }


    .events-history-title {

      margin:
        18px 0 10px;

      font-size:
        16px;

      font-weight:
        800;

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


  createEventsStyles();


  /*
     Hide the form initially.
  */

  form.style.display =
    "none";


  form.setAttribute(
    "aria-hidden",
    "true"
  );


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

          Your events, symposiums,
          competitions and achievements
          live here. ✨

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

        }

        else {

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
  )
    return;


  if (
    state.eventsFormOpen
  ) {

    form.style.display =
      "";


    form.setAttribute(
      "aria-hidden",
      "false"
    );


    if (
      button
    ) {

      button.textContent =
        "← My Events";

    }

  }

  else {

    form.style.display =
      "none";


    form.setAttribute(
      "aria-hidden",
      "true"
    );


    if (
      button
    ) {

      button.textContent =
        "➕ Add Event";

    }

  }

}


function openEventForm() {

  const form =
    $("eventForm");


  if (
    !form
  )
    return;


  state.eventsFormOpen =
    true;


  updateEventsFormState();


  setTimeout(
    () => {

      form.scrollIntoView(
        {

          behavior:
            "smooth",

          block:
            "start"

        }
      );

    },
    50
  );


  toast(
    "Okay pookie, tell me what you participated in ✨"
  );

}


function closeEventForm() {

  state.eventsFormOpen =
    false;


  updateEventsFormState();


  const list =
    $("eventsList");


  if (
    list
  ) {

    list.scrollIntoView(
      {

        behavior:
          "smooth",

        block:
          "start"

      }
    );

  }

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


        /*
           Close form after saving.
        */

        state.eventsFormOpen =
          false;


        updateEventsFormState();


        renderEvents();


        toast(
          "Event safely stored in your Elixir ✨"
        );

      }
    );

}


function renderEvents() {

  if (
    !$("eventsList")
  )
    return;


  setupEventsElixir();


  const rows =
    [
      ...events
    ]
      .sort(
        (
          a,
          b
        ) => {

          const dateCompare =
            b.date.localeCompare(
              a.date
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
    rows.length ===
    0
  ) {

    $("eventsList")
      .innerHTML = `

        <div
          class="empty"
        >

          🌸

          <br><br>

          No participated events yet.

          <br><br>

          Your scrapbook is suspiciously
          empty.

          <br>

          Tap
          <strong>
            ➕ Add Event
          </strong>
          and give me some lore. 👀

        </div>

      `;

    return;

  }


  $("eventsList")
    .innerHTML = `

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

        Look at you collecting
        experiences. 👀✨

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

                  style="
                    margin-top:10px
                  "

                  onclick=
                    "deleteEvent('${item.id}')"

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
   ACADEMIC PASSWORD
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

  if (
    !$("lockModal")
  )
    return;


  $("lockModal")
    .classList
    .add(
      "show"
    );


  $("lockModal")
    .setAttribute(
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
    () => {

      if (
        $("passwordInput")
      ) {

        $("passwordInput")
          .focus();

      }

    },
    70
  );

}


function closeLockModal() {

  if (
    !$("lockModal")
  )
    return;


  $("lockModal")
    .classList
    .remove(
      "show"
    );


  $("lockModal")
    .setAttribute(
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

        }

        else {

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


          state.academicEditMode =
            true;


          closeLockModal();


          renderAcademic();


          toast(
            "Academic editing unlocked 🦋"
          );

        }

        catch {

          toast(
            "Unable to unlock right now."
          );

        }

      }
    );

}


function updateAcademicEditButtons() {

  const button =
    $("academicEditButton");


  if (
    button
  ) {

    button.textContent =
      state.academicEditMode
        ? "🔒 Done Editing"
        : "🔐 Edit Academic";

  }


  const externalButton =
    $("academicLockButton");


  if (
    externalButton
  ) {

    externalButton.textContent =
      state.academicEditMode
        ? "🔒 Lock Academic"
        : "🔐 Edit Academic";

  }

}


function finishAcademicEdit() {

  saveAcademicData();


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


function lockAcademic() {

  finishAcademicEdit();

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

}


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
    !$("academicContent")
  )
    return;


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


  const yearLabel =
    state.currentYear ===
      1
      ? "1st"
      : state.currentYear ===
        2
        ? "2nd"
        : state.currentYear ===
          3
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
              style="
                margin:0
              "
            >

              🌱
              ${yearLabel}
              Year

            </h2>


            <div
              class="muted"
            >

              Your marks and grades
              are always visible.

              Editing requires your
              password.

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

              🔐 Edit Academic

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


  $("academicEditButton")
    .addEventListener(
      "click",
      () => {

        if (
          state.academicEditMode
        ) {

          finishAcademicEdit();

        }

        else {

          openLockModal();

        }

      }
    );


  updateAcademicEditButtons();


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

  }

  else if (
    state.academicMode ===
    "practical"
  ) {

    renderPractical(
      yearSemesters
    );

  }

  else {

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

          CAT 1 and CAT 2 are
          each out of 100.

          Semester grades use
          the preloaded credits.

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


          const cat1Number =
            Number(
              record.cat1
            );


          const cat2Number =
            Number(
              record.cat2
            );


          const cat1 =
            Number.isFinite(
              cat1Number
            )
              ? cat1Number
              : null;


          const cat2 =
            Number.isFinite(
              cat2Number
            )
              ? cat2Number
              : null;


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
                class="stat-value"
              >

                ${
                  summary.cat1Percentage
                    .toFixed(
                      2
                    )
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
                  summary.cat2Percentage
                    .toFixed(
                      2
                    )
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
                  summary.gpa
                    .toFixed(
                      2
                    )
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

          Practical subjects use
          their preloaded credits.

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

      .join("") + `

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
                  to change practical
                  grades.

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

              🏆 Year CGPA

            </h3>


            <div
              class="muted"
            >

              Theory semester grades
              + practical grades,
              weighted by their
              preloaded credits.

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
                            .toFixed(
                              2
                            )
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
              year ===
              1
                ? "1st"
                : year ===
                  2
                  ? "2nd"
                  : year ===
                    3
                    ? "3rd"
                    : "4th"
            }

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
            selected ===
            grade
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
                event.target.value
                  .trim();


              if (
                raw ===
                ""
              ) {

                record[field] =
                  "";

              }

              else {

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

            }

            else {

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


            if (
              state.currentPage ===
              "academicGrowth"
            ) {

              renderAcademicGrowth();

            }

          }
        );

      }
    );

}


/* ============================================================
   SEMESTER GPA
   ============================================================ */

function calculateSemester(
  semesterNumber
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


        if (
          !record
        )
          return;


        const credit =
          Number(
            course.credits
          );


        if (
          !Number.isFinite(
            credit
          ) ||
          credit <=
          0
        )
          return;


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


              if (
                !record
              )
                return;


              const credit =
                Number(
                  course.credits
                );


              if (
                !Number.isFinite(
                  credit
                ) ||
                credit <=
                0
              )
                return;


              const grade =
                course.section ===
                "practical"

                  ? record.practicalGrade

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
    let day =
      1;

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
          items.length ===
          0
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
   ACADEMIC GARDEN ENTRY
   ============================================================ */

if (
  $("openAcademicRace")
) {

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

}


/* ============================================================
   ACADEMIC GROWTH
   ============================================================ */

function getAcademicYearLabel(
  year
) {

  return year ===
    1
    ? "1st Year"
    : year ===
      2
      ? "2nd Year"
      : year ===
        3
        ? "3rd Year"
        : "4th Year";

}


function getSemesterMetrics(
  semesterNumber
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


        if (
          !record
        )
          return;


        if (
          course.section ===
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
          course.section ===
          "practical"
        ) {

          if (
            record.practicalGrade &&
            GRADE_POINTS[
              record.practicalGrade
            ] !== undefined
          ) {

            practicalGradeCount++;

          }

        }

      }
    );


  const semesterResult =
    calculateSemester(
      semesterNumber
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
      (
        theoryGradeCount +
        practicalGradeCount
      ) >
      0
        ? semesterResult.gpa
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


function findPreviousMetric(
  semesterNumber,
  metric
) {

  const previousSemesters =
    Object.keys(
      CURRICULUM
    )

      .map(
        Number
      )

      .filter(
        number =>
          number <
          semesterNumber
      )

      .sort(
        (
          a,
          b
        ) =>
          b - a
      );


  for (
    const previous
    of
    previousSemesters
  ) {

    const data =
      getSemesterMetrics(
        previous
      );


    if (
      data[metric] !==
      null
    ) {

      return {

        semester:
          previous,

        value:
          data[metric]

      };

    }

  }


  return null;

}


function findPreviousYearCGPA(
  year
) {

  for (
    let previousYear =
      year -
      1;

    previousYear >=
    1;

    previousYear--
  ) {

    const value =
      calculateYearCGPA(
        previousYear
      );


    if (
      value >
      0
    ) {

      return {

        year:
          previousYear,

        value

      };

    }

  }


  return null;

}


function formatGrowthValue(
  value,
  suffix = ""
) {

  if (
    value ===
    null ||
    value ===
    undefined
  ) {

    return "—";

  }


  return `${value.toFixed(
    2
  )}${suffix}`;

}


function getGrowthDeltaClass(
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


function getGrowthArrow(
  delta
) {

  if (
    delta ===
    null
  ) {

    return "•";

  }


  if (
    delta >
    0.004
  ) {

    return "↑";

  }


  if (
    delta <
    -0.004
  ) {

    return "↓";

  }


  return "→";

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
      Give me another semester and
      I’ll start catching you in the act. 👀

    `;

  }


  const rounded =
    Math.abs(
      delta
    ).toFixed(
      2
    );


  if (
    delta >
    0.004
  ) {

    const positive = [

      `🦋 ${label} is UP by ${rounded}. Ohhh, somebody has been quietly cooking.`,

      `👀 ${label} increased by ${rounded}. I saw that little academic upgrade.`,

      `✨ ${label} climbed by ${rounded}. Sneaky improvement detected.`,

      `💅 ${label} said “watch me” and went up by ${rounded}.`

    ];


    return positive[
      Math.floor(
        Math.abs(
          delta *
          1000
        ) %
        positive.length
      )
    ];

  }


  if (
    delta <
    -0.004
  ) {

    const negative = [

      `👀 ${label} is DOWN by ${rounded}. Caught you. Comeback department is now open.`,

      `🌷 ${label} slipped by ${rounded}. Nothing dramatic — we simply have lore to rewrite.`,

      `🫣 ${label} dropped by ${rounded}. Academic Growth has noticed.`,

      `💗 ${label} moved down by ${rounded}. Good thing this is a tracker, not a courtroom.`

    ];


    return negative[
      Math.floor(
        Math.abs(
          delta *
          1000
        ) %
        negative.length
      )
    ];

  }


  return `

    🌸 ${label} is basically steady.
    Holding the line. Very suspiciously calm.

  `;

}


function createGrowthStyles() {

  if (
    $("academicGrowthStyles")
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "academicGrowthStyles";


  style.textContent = `

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
          0.75
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

      margin-bottom:
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
          0.22
        );

    }


    .growth-hero h2 {

      margin:
        0 0 6px;

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
          0.85
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          0.16
        );

    }


    .growth-label {

      font-size:
        12px;

      opacity:
        0.72;

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
          0.82
        );

      border:
        1px solid
        rgba(
          255,
          112,
          168,
          0.14
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
          0.08
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

      border-radius:
        22px;

      background:
        linear-gradient(
          135deg,
          #fff8fb,
          #fff2f8
        );

    }


    .growth-icon-button {

      border:
        0;

      cursor:
        pointer;

      width:
        100%;

      min-height:
        120px;

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

    }


    .growth-icon-big {

      font-size:
        38px;

      display:
        block;

      margin-bottom:
        5px;

    }


    .growth-note {

      font-size:
        12px;

      opacity:
        0.72;

      line-height:
        1.45;

    }

  `;


  document.head.appendChild(
    style
  );

}


function createAcademicGrowthPage() {

  if (
    $("academicGrowth")
  ) {

    return;

  }


  createGrowthStyles();


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

            Academic Race gives me
            the data.

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


function renderGrowthMetricCard(
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


  const className =
    getGrowthDeltaClass(
      delta
    );


  const arrow =
    getGrowthArrow(
      delta
    );


  let comparison =
    "No previous value yet.";


  if (
    delta !==
    null
  ) {

    comparison =
      `${arrow} ${
        delta >
        0.004

          ? "Increased"

          : delta <
            -0.004

            ? "Decreased"

            : "Stayed almost the same"
      } by ${
        Math.abs(
          delta
        ).toFixed(
          2
        )
      }`;

  }


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

            : escapeHtml(
                formatGrowthValue(
                  value,
                  suffix
                )
              )
        }

      </div>


      <div
        class="
          growth-change
          ${className}
        "
      >

        ${escapeHtml(
          comparison
        )}

      </div>

    </div>

  `;

}


function renderAcademicGrowth() {

  createAcademicGrowthPage();


  const container =
    $("academicGrowthContent");


  if (
    !container
  )
    return;


  const year =
    state.growthYear;


  const semesters =
    getYearSemesters(
      year
    );


  const semesterData =
    semesters.map(
      semester => ({

        semester,

        data:
          getSemesterMetrics(
            semester
          )

      })
    );


  const hasAnyData =
    semesterData.some(
      item =>
        item.data
          .hasAnyData
    );


  const yearCgpaRaw =
    calculateYearCGPA(
      year
    );


  const yearCgpa =
    yearCgpaRaw >
    0
      ? yearCgpaRaw
      : null;


  const latest =
    [
      ...semesterData
    ]
      .reverse()
      .find(
        item =>
          item.data
            .hasAnyData
      );


  const latestSemester =
    latest
      ? latest.semester
      : null;


  const latestData =
    latest
      ? latest.data
      : null;


  const previousCat1 =
    latestSemester !==
    null

      ? findPreviousMetric(
          latestSemester,
          "cat1"
        )

      : null;


  const previousCat2 =
    latestSemester !==
    null

      ? findPreviousMetric(
          latestSemester,
          "cat2"
        )

      : null;


  const previousGpa =
    latestSemester !==
    null

      ? findPreviousMetric(
          latestSemester,
          "gpa"
        )

      : null;


  const previousYear =
    findPreviousYearCGPA(
      year
    );


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
            font-size:42px;
            margin-bottom:8px
          "
        >

          🦋

        </div>


        <strong>

          ${getAcademicYearLabel(
            year
          )}

          is still waiting for
          your update.

        </strong>


        <div
          class="growth-note"
          style="
            margin-top:8px
          "
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
          CAT marks have entered
          the chat.
        </strong>

        <br>

        ${getAcademicYearLabel(
          year
        )}

        currently has

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

        ${getAcademicYearLabel(
          year
        )}

        is no longer allowed to
        sneak past me unnoticed.

        <br><br>

        ${
          latestSemester

            ? `

              Latest update spotted in
              <strong>
                ${
                  CURRICULUM[
                    latestSemester
                  ].name
                }
              </strong>.

            `

            : ""
        }

        ${
          latestData &&
          latestData.gpa !==
            null

            ? `

              <br>

              🎀 GPA is alive and
              reporting for duty.

            `

            : ""
        }

      </div>

    `;

  }


  let cgpaComparison =
    "";


  if (
    yearCgpa !==
      null &&
    previousYear
  ) {

    const delta =
      yearCgpa -
      previousYear.value;


    const className =
      getGrowthDeltaClass(
        delta
      );


    cgpaComparison = `

      <div
        class="
          growth-message
          ${className}
        "
      >

        ${
          delta >
          0.004

            ? `

              ↑ CGPA increased by
              <strong>
                ${
                  Math.abs(
                    delta
                  ).toFixed(
                    2
                  )
                }
              </strong>

              from
              ${getAcademicYearLabel(
                previousYear.year
              )}.

              Sneaky little academic
              upgrade. 👀

            `

            : delta <
              -0.004

              ? `

                ↓ CGPA decreased by
                <strong>
                  ${
                    Math.abs(
                      delta
                    ).toFixed(
                      2
                    )
                  }
                </strong>

                from
                ${getAcademicYearLabel(
                  previousYear.year
                )}.

                The comeback department
                remains open. 🌷

              `

              : `

                → CGPA is almost unchanged
                from
                ${getAcademicYearLabel(
                  previousYear.year
                )}.

                Holding the line.

              `
        }

      </div>

    `;

  }

  else if (
    yearCgpa !==
    null
  ) {

    cgpaComparison = `

      <div
        class="growth-message"
      >

        🌱 First year with CGPA data.

        Baseline established.

        Give me another year and
        I’ll start comparing properly. 👀

      </div>

    `;

  }


  const growthGrid = `

    <div
      class="growth-grid"
    >

      ${renderGrowthMetricCard(
        "Year CGPA",
        yearCgpa,
        previousYear
          ? previousYear.value
          : null
      )}


      ${renderGrowthMetricCard(
        "Latest CAT 1",
        latestData
          ? latestData.cat1
          : null,
        previousCat1
          ? previousCat1.value
          : null,
        "%"
      )}


      ${renderGrowthMetricCard(
        "Latest CAT 2",
        latestData
          ? latestData.cat2
          : null,
        previousCat2
          ? previousCat2.value
          : null,
        "%"
      )}


      ${renderGrowthMetricCard(
        "Latest Semester GPA",
        latestData
          ? latestData.gpa
          : null,
        previousGpa
          ? previousGpa.value
          : null
      )}

    </div>

  `;


  let comparisonMessages =
    "";


  if (
    latestData &&
    latestData.cat1 !==
      null
  ) {

    comparisonMessages += `

      <div
        class="growth-message"
      >

        ${growthComment(
          "CAT 1",
          previousCat1
            ? latestData.cat1 -
              previousCat1.value
            : null
        )}

      </div>

    `;

  }


  if (
    latestData &&
    latestData.cat2 !==
      null
  ) {

    comparisonMessages += `

      <div
        class="growth-message"
      >

        ${growthComment(
          "CAT 2",
          previousCat2
            ? latestData.cat2 -
              previousCat2.value
            : null
        )}

      </div>

    `;

  }


  if (
    latestData &&
    latestData.gpa !==
      null
  ) {

    comparisonMessages += `

      <div
        class="growth-message"
      >

        ${growthComment(
          "Semester GPA",
          previousGpa
            ? latestData.gpa -
              previousGpa.value
            : null
        )}

      </div>

    `;

  }


  const semesterCards =
    semesterData
      .map(
        item => {

          const data =
            item.data;


          const previousForCat1 =
            findPreviousMetric(
              item.semester,
              "cat1"
            );


          const previousForCat2 =
            findPreviousMetric(
              item.semester,
              "cat2"
            );


          const previousForGpa =
            findPreviousMetric(
              item.semester,
              "gpa"
            );


          return `

            <div
              class="growth-semester"
            >

              <div
                class="
                  growth-semester-title
                "
              >

                ${
                  escapeHtml(
                    CURRICULUM[
                      item.semester
                    ].name
                  )
                }

              </div>


              <div
                class="
                  growth-metric-row
                "
              >

                <span>
                  CAT 1
                </span>


                <strong>

                  ${
                    data.cat1 ===
                    null

                      ? "Not entered"

                      : formatGrowthValue(
                          data.cat1,
                          "%"
                        )
                  }

                </strong>

              </div>


              <div
                class="
                  growth-metric-row
                "
              >

                <span>
                  CAT 2
                </span>


                <strong>

                  ${
                    data.cat2 ===
                    null

                      ? "Not entered"

                      : formatGrowthValue(
                          data.cat2,
                          "%"
                        )
                  }

                </strong>

              </div>


              <div
                class="
                  growth-metric-row
                "
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
                class="
                  growth-metric-row
                "
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
                data.cat1 !==
                null

                  ? `

                    <div
                      class="
                        growth-change
                        ${getGrowthDeltaClass(
                          previousForCat1
                            ? data.cat1 -
                              previousForCat1.value
                            : null
                        )}
                      "
                    >

                      ${growthComment(
                        "CAT 1",
                        previousForCat1
                          ? data.cat1 -
                            previousForCat1.value
                          : null
                      )}

                    </div>

                  `

                  : ""
              }


              ${
                data.cat2 !==
                null

                  ? `

                    <div
                      class="
                        growth-change
                        ${getGrowthDeltaClass(
                          previousForCat2
                            ? data.cat2 -
                              previousForCat2.value
                            : null
                        )}
                      "
                      style="
                        margin-top:7px
                      "
                    >

                      ${growthComment(
                        "CAT 2",
                        previousForCat2
                          ? data.cat2 -
                            previousForCat2.value
                          : null
                      )}

                    </div>

                  `

                  : ""
              }


              ${
                data.gpa !==
                null

                  ? `

                    <div
                      class="
                        growth-change
                        ${getGrowthDeltaClass(
                          previousForGpa
                            ? data.gpa -
                              previousForGpa.value
                            : null
                        )}
                      "
                      style="
                        margin-top:7px
                      "
                    >

                      ${growthComment(
                        "GPA",
                        previousForGpa
                          ? data.gpa -
                            previousForGpa.value
                          : null
                      )}

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
      style="
        margin-top:14px
      "
    >

      <h2>

        ${getAcademicYearLabel(
          year
        )}

      </h2>


      <div
        class="growth-note"
      >

        I’m not judging.

        I’m just keeping receipts. 👀🌷

      </div>

    </div>


    <div
      class="growth-year-tabs"
    >

      ${[1, 2, 3, 4]
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
        .join("")}

    </div>


    ${story}


    ${
      hasAnyData
        ? growthGrid
        : ""
    }


    ${cgpaComparison}


    ${
      comparisonMessages

        ? `

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


            ${comparisonMessages}

          </div>

        `

        : ""
    }


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

        GPA uses the grades already
        entered in Academic Race,
        including practical grades.

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


/* ============================================================
   ACADEMIC GROWTH ICON
   ============================================================ */

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


  createGrowthStyles();


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
   INITIALISE EVENTS ELIXIR
   ============================================================ */

setupEventsElixir();


/* ============================================================
   CREATE ACADEMIC GROWTH
   ============================================================ */

createAcademicGrowthIcon();


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
          "./service-worker.js?v=4",
          {
            updateViaCache:
              "none"
          }
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

setupEventsElixir();

createAcademicGrowthIcon();
