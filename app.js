new Vue({
  el: "#app",

  data() {
    return {
      numberProjectsVisibles: 4,
      messageButtonProjects: "Ver más",
      projectsActive: [
        {
          id: 1,
          name: "ESTACIÓN ELEVADORA PTAR CANOAS",
          shortDescription: "Construcción de Tapón Túnel",
          img: "images/estacion_elevadora_canoas_logo.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Soletanche Bachy Cimas S.A.",
          localization: "Soacha (Cundinamarca)",
          contractValue: "570 SSMV",
          validity: "Febrero 2020 - Septiembre 2020",
          description:
            "Construcción de Tapón Túnel de 4,20m. de diámetro para la EEC. Obra civil para planta de concreto y piscinas para manejo de lodos en la construcción de pozos.",
        },
        {
          id: 2,
          name: "I.E. INMACULADA CONCEPCIÓN-PICHINDÉ",
          shortDescription:
            "Construcción de la Institución Educativa I.E. Pichindé Sede Inmaculada Concepción Cali (Valle)",
          img: "images/pichinde_imagen.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Corporación País y Futuro Corpafu",
          localization: "Santiago de Cali (Valle)",
          contractValue: "4840 SMMV",
          validity: "Septiembre 2019 - Abril 2020",
          description:
            "Construcción a todo costo de la Institución Educativa I.E. Pichindé Sede Inmaculada Concepción Cali (Valle) Cimentación, estructura, acabados, carpinterías, equipos, instalaciones. 1800m2.",
        },
        {
          id: 3,
          name: "CDI PONDAJE CALI",
          shortDescription:
            "Construcción del Centro de Desarrollo Infantil CDI Laguna Azul en el Distrito de Agua Blanca",
          img: "images/cdi_imagen.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Corporación País y Futuro Corpafu",
          localization: "Santiago de Cali (Valle)",
          contractValue: "3172 SMMV",
          validity: "Mayo 2019 - Enero 2020",
          description:
            "Construcción a todo costo del Centro de Desarrollo Infantil CDI Laguna Azul en el Distrito de Agua Blanca. Cimentación, estructura, acabados, carpinterías, equipos, instalaciones. 1300m2.",
        },
        {
          id: 4,
          name: "PATIO TEMPORAL SUR TRANSMILENIO",
          shortDescription: "Construcción Patio temporal Sur del Transmilenio",
          img: "images/patio_imagen.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Constructora Conconcreto S.A.",
          localization: "Bogotá D.C.",
          contractValue: "820 SMMV",
          validity: "Junio 2019 - Diciembre 2019",
          description:
            "Construcción pavimento hidráulico, canales, cárcamos y cimentaciones para el Patio temporal Sur del Transmilenio.",
        },
        {
          id: 5,
          name: "SILOS CIMAS FINCA DE MOSQUERA",
          shortDescription:
            "Construcción de Bases para silos para la fabrica Finca en Mosquera (Cundinamarca)",
          img: "images/finca_silos_imagen.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Soletanche Bachy Cimas S.A.",
          localization: "Mosquera (Cundinamarca)",
          contractValue: "1100 SSMV",
          validity: "Mayo 2019 - Agosto 2019",
          description:
            "Construcción de Bases para silos para la fabrica Finca en Mosquera (Cundinamarca).",
        },
        {
          id: 6,
          name: "HOMECENTER LOGIKA MADRID",
          shortDescription:
            "Construcción de Bodegas para el CEDI de Homecenter en Madrid (Cundinamarca)",
          img: "images/homecenter_imagen.jpg",
          alt: "img-project",
          state: "✓ Entregado",
          contractor: "Constructora Conconcreto S.A.",
          localization: "Madrid (Cundinamarca)",
          contractValue: "1200 SMMV",
          validity: "Marzo 2019 - Julio 2019",
          description:
            "Construcción de Bodegas para el CEDI de Homecenter en Madrid (Cundinamarca), cimentación, montaje de prefabricados, estructura, edificios y pavimentos.",
        },
        // {
        //   id: 7,
        //   name: "Test",
        //   shortDescription:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //   img: "images/ensueño_imagen.jpg",
        //   alt: "img-project",
        //   state: "- En construcción",
        //   contractor: "",
        //   localization: "",
        //   contractValue: "",
        //   validity: "",
        //   description: "",
        // },
      ],
    };
  },
  methods: {
    sumProject() {
      if (this.numberProjectsVisibles < this.projectsActive.length) {
        this.numberProjectsVisibles = this.numberProjectsVisibles + 4;
      } else {
        this.numberProjectsVisibles = 4;
        this.messageButtonProjects = "Ver más";
      }
      if (this.numberProjectsVisibles >= this.projectsActive.length) {
        this.messageButtonProjects = "Ver menos";
      }
    },
  },
});
