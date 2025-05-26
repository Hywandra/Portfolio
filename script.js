window.addEventListener("load", () => {
  if (!sessionStorage.getItem("loaderShown")) {
    const loader = document.querySelector(".preloader");

    loader.classList.add("preloader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });

    sessionStorage.setItem("loaderShown", "true");
  } else {
    const loader = document.querySelector(".preloader");
    if (loader) {
      document.body.removeChild(loader);
    }
  }
});

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-190px";
}

// Subjects with both display name and link code
const groupedModules = [
  {
    domain: "Hardware & Architecture",
    subjects: [
      {
        name: "Internal architecture of the computer - UF0769",
        keyword: "UF0769",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/754",
      },
      {
        name: "Devices and peripherals - UF0770",
        keyword: "UF0770",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/755",
      },
      {
        name: "Computer processing - UF0802",
        keyword: "UF0802",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/784",
      },
    ],
  },
  {
    domain: "Operating Systems & Utilities",
    subjects: [
      {
        name: "Operating systems (typologies) - UF0797",
        keyword: "UF0797",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/779",
      },
      {
        name: "Utilities - UF0798",
        keyword: "UF0798",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/780",
      },
    ],
  },
  {
    domain: "Networking & Administration",
    subjects: [
      {
        name: "Network connections - UF0771",
        keyword: "UF0771",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/756",
      },
      {
        name: "Local network systems - UF0799",
        keyword: "UF0799",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/781",
      },
      {
        name: "Additional network services - UF0800",
        keyword: "UF0800",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/782",
      },
      {
        name: "Local network administration - UF0801",
        keyword: "UF0801",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/783",
      },
    ],
  },
  {
    domain: "Fundamentals & Theory",
    subjects: [
      {
        name: "Computer science (basics) - UF7846",
        keyword: "UF7846",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/9160",
      },
      {
        name: "Algorithms - UF0804",
        keyword: "UF0804",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/786",
      },
      {
        name: "Data structures - UF0805",
        keyword: "UF0805",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/787",
      },
      {
        name: "Methodological principles of programming - UF0806",
        keyword: "UF0806",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/788",
      },
    ],
  },
  {
    domain: "Software Process & Security",
    subjects: [
      {
        name: "Systems analysis - UF0811",
        keyword: "UF0811",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/793",
      },
      {
        name: "Programming methodologies in distributed systems - UF0815",
        keyword: "UF0815",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/796",
      },
      {
        name: "Security in software development - UF10795",
        keyword: "UF10795",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17539",
      },
    ],
  },
  {
    domain: "Databases & Data Management",
    subjects: [
      {
        name: "SQL language fundamentals - UF10788",
        keyword: "UF10788",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17532",
      },
      {
        name: "Programming in advanced SQL language - UF0814",
        keyword: "UF0814",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/795",
      },
      {
        name: "Database administration for programmers - UF3933",
        keyword: "UF3933",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/3435",
      },
    ],
  },
  {
    domain: "Programming Languages & Frameworks",
    subjects: [
      {
        name: "C/C++ programming (fundamentals) - UF0809",
        keyword: "UF0809",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/791",
      },
      {
        name: "C/C++ programming (advanced) - UF0810",
        keyword: "UF0810",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/792",
      },
      {
        name: "Python fundamentals - UF10793",
        keyword: "UF10793",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17537",
      },
      {
        name: "Advanced programming with Python - UF10794",
        keyword: "UF10794",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17538",
      },
      {
        name: "C# programming - UF3935",
        keyword: "UF3935",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/3437",
      },
      {
        name: "Programming in Visual Basic NET - UF3934",
        keyword: "UF3934",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/3436",
      },
      {
        name: "ASP.Net Core MVC programming - UF10792",
        keyword: "UF10792",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17536",
      },
      {
        name: "Distributed systems programming (JAVA) - UF0816",
        keyword: "UF0816",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/797",
      },
      {
        name: "Web application development in JAVA - UF10791",
        keyword: "UF10791",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17535",
      },
    ],
  } /* THIS DOT NOT WORKS
  {
    domain: "Professional Development and Soft Skills",
    subjects: [
      {
        name: "Professional development - UF10790",
        keyword: "UF10790",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17534",
      },
      {
        name: "Soft skills - UF10789",
        keyword: "UF10789",
        link: "https://catalogo.anqep.gov.pt/ufcdDetalhe/17533",
      },
    ],
  }, */,
];

const subjectList = document.getElementById("subjectList");

groupedModules.forEach((group) => {
  const groupDiv = document.createElement("div");
  groupDiv.className = "subject-group";

  const title = document.createElement("h3");
  title.textContent = group.domain;
  title.className = "group-title";
  groupDiv.appendChild(title);

  const ul = document.createElement("ul");
  group.subjects.forEach((subject) => {
    const { name, keyword, link } = subject;
    const li = document.createElement("li");
    const htmlText = name.replace(
      keyword,
      `<a href="${link}" target="_blank">${keyword}</a>`
    );
    li.innerHTML = htmlText;
    ul.appendChild(li);
  });

  groupDiv.appendChild(ul);
  subjectList.appendChild(groupDiv);
});

// making this group aligned with the rest
const softSkillsGroup = document.createElement("div");
softSkillsGroup.className = "subject-group";
softSkillsGroup.innerHTML = `
  <div class="group-title">Professional Development and Soft Skills</div>
  <div class="collapsible-wrapper">
    <button class="collapsible">Practical Training in a Work Context (Internship)</button>
    <div class="content">
      <p>
        Trainees will have practical training in a work context where they will apply the knowledge and skills acquired to the practical activities of their respective professional profile.<br>
        In addition, they will also have to carry out activities under guidance, using the techniques, equipment and materials integrated into the processes of producing goods or providing services.
      </p>
    </div>
    <button class="collapsible">Reflexive Learning Portfolio</button>
    <div class="content">
      <ul>
        <li>Develop self-knowledge;</li>
        <li>Exercise reflective capacity;</li>
        <li>Recognise their own training-learning process;</li>
        <li>Observe the efforts, progress and results achieved;</li>
        <li>Explain the competences acquired (Knowing, Knowing How, Knowing How to Be);</li>
        <li>Develop a global and comprehensive vision of the training-learning process;</li>
        <li>Self-establish relationships between the various modules of the course;</li>
        <li>Identify the relationship between theory and practice;</li>
        <li>Stimulate autonomy and responsibility concerning the training process;</li>
        <li>Exploring themes and areas of interest.</li>
      </ul>
    </div>
  </div>
`;

document.getElementById("subjectList").appendChild(softSkillsGroup);

// Collapsible behavior
document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");
  coll.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

// Contact form sendig data to formspree
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Error sending message. Please try again later.");
    console.error(error);
  }
});
