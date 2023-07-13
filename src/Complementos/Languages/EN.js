export const GetDate = () => {
  var date = new Date();
  return date.getFullYear();
};

export const ENGLISH = {
  frase:
    "I am a self-taught developer who loves programming. I started with JavaScript as Frontend. Now I am with C# and your .Net technologies to dedicate myself to Backend and Unity. I want to polish myself well with C# and videogames with Unity. Every day I have a new goal to achieve, you can find me at networks like",
  slogan: "!Never Give Up¡",
  skill: "My Skills",
  myCourses: "My Courses",
  goCourse: "Go to Course",

  Author: `All Rights Reserved ${GetDate()}`,
  form: {
    contactMe: "Contact Me",
    send: "Send",
    name: "Name",
    email: "Email",
    message: "Message",
    phome: "Phone",
    info: "!Message Sent",
    validation: {
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
      phone: "Phone is required",
      errorEmail: "Email is not valid",
    },
  },
  menu: {
    home: "Home",
    blog: "Blog",
    portafolio: "Portfolio",
    login: "Login",
    account: "Account",
  },
  portfolio: {
    title: "My Projects",
    go: "Go to Project",
    tec: "Technologies Applied",
  },
};
