const scrollToSection = (section: "home" | "pricing" | "faq") => {
  const sectionElement = document.getElementById(section);

  if (section === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

export default scrollToSection;
