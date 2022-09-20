const { User, Category, Property } = require("../models");

User.bulkCreate(
  [
    {
      name: "Joselito",
      lastname: "Duarte",
      email: "joselito@gmail.com",
      password: "algarrobo",
      is_admin: true,
    },

    {
      name: "Jose",
      lastname: "Dua",
      email: "jose@gmail.com",
      password: "alga",
    },

    {
      name: "Braulio",
      lastname: "Arte",
      email: "Braulio@gmail.com",
      password: "robo",
      is_admin: true,
    },

    {
      name: "Kletus",
      lastname: "Teduar",
      email: "kletus@gmail.com",
      password: "Gala",
    },

    {
      name: "Cristobal",
      lastname: "Remo",
      email: "cristobal@gmail.com",
      password: "agua",
    },
  ],
  { validate: true, individualHooks: true }
);

Category.bulkCreate([
  {
    name: "Departamentos",
  },
  {
    name: "Casas",
  },
  {
    name: "Lotes",
  },
  {
    name: "Locales",
  },
]).then(() => {
  Property.bulkCreate([
    {
      name: "Monoambiente Con Cochera Dr. Melo 3740",
      categoryId: 1,
      price: 49000,
      description:
        "Impecable departamento monoambiente en el centro de Lanús, en la calle Dr. Melo 3740. Ingresamos al edificio por una imponente entrada, nos recibe un hall increíble que nos lleva a los ascensores. El departamento se encuentra en un cuarto piso, con vista abierta y balcón. Al entrar nos encontramos con el baño completo, y los placares empotrados. El living comedor es muy amplio y nos ofrece la posibilidad de dividir el departamento para hacer una habitación. La cocina es semi integrada con buena ventilación. El inmueble tiene salida a balcón y muy buena luminosidad general.El edificio cuenta con un gran SUM equipado. Cochera cubierta incluida en el precio.",
      images:
        "https://http2.mlstatic.com/D_NQ_NP_2X_669517-MLA51542222976_092022-F.webp",
      availability: "Disponible",
      type: "Venta",
      address: "Dr. Melo 3740",
      location:
        "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.7160637%2C-58.3955793&zoom=16&size=732x300&signature=R3hfWZnR4n75wf5skGLx_Q5ISBA=",
    },
    {
      name: "Departamento De 3 Ambientes Con Espacio Guardacoche San Martín 1780",
      categoryId: 1,
      price: 59000,
      description:
        "Departamento en primer piso por escalera ubicado en San Martín 1780, Avellaneda, en una linda zona residencial.2 dormitorios, ambos muy luminosos, uno con espacio tipo vestidor. Living comedor espacioso con ventana a la cochera. Cocina completa totalmente equipada. 1 baño completo con bañera. Espacio guardacoches. En la terraza común, espacio de tendido y lavadero. Bajas expensas",
      images:
        "https://http2.mlstatic.com/D_NQ_NP_2X_694447-MLA51542226309_092022-F.webp",
      availability: "Disponible",
      type: "Venta",
      address: "San Martin 1780, Avellaneda",
      location:
        "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.6705893%2C-58.3583901&zoom=16&size=732x300&signature=GRLb4LBYtqORelR0pVyHo33JdIA=",
    },
    {
        name: "Casa Perimetral Bueno - Costa Esmeralda",
        categoryId: 2,
        price: 220000,
        description:
          "Casa a estrenar en Costa Esmeralda, barrio Golf 1. Con muy buena orientación, esta casa se abre con grandes ventanales maximizando la conexión del interior con el entorno. Se desarrolla en dos plantas, ambas muy luminosas. En Planta Baja un gran ambiente de living comedor con cocina integrada, toillete y hogar. Galería con deck, pergola y parrilla. Salida de servicio desde cocina a un semicubierto con lavadero apto para cochera o uso de galería. En Planta Alta 3 dormitorios, uno en suite muy espacioso con baño compartimentado y dos con baño compartido. Materiales de muy buena calidad y terminaciones muy prolijas.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_995739-MLA51476559578_092022-F.webp",
        availability: "Disponible",
        type: "Venta",
        address: "Casa Perimetral Bueno 126m - Costa Esmeralda - Golf 1 Id11087, Costa Esmeralda, Bs.As. Costa Atlántica",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-37.002824%2C-56.806888&zoom=16&size=732x300&signature=6OFY3b5vWrbWH131mI7QJoCwA1s=",
      },
      {
        name: "Casa - Club De Campo Pueyrredon",
        categoryId: 2,
        price: 1200,
        description:
          "Hermosa casa desarrollada en dos plantas sobre lote perimetral del barrio Club de Campo Pueyrredon. Pilar.En planta baja se accede a hall de recepción con toilette, escritorio, amplio living comedor con hogar y vista al jardin, cocina con comedor diario y lavadero. En planta alta : Hall de distribucion, dormitorio principal en suite, más dos dormitorios que comparten un baño, balcon terraza.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_703094-MLA51152877372_082022-F.webp",
        availability: "Disponible",
        type: "Alquiler",
        address: "Pueyrredon, Pilar, Pueyrredón, Pilar, Bs.As. G.B.A. Norte",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.4415005%2C-58.8577826&zoom=16&size=732x300&signature=Ln6aextjNB4vQyOCKaPLkQ-5qDo=",
      },
      {
        name: "Terreno En Venta En La Reserva Cardales - Sofitel",
        categoryId: 3,
        price: 85000,
        description:
          "Posesión inmediata. Escritura. Los boletos se firman en dólares estadounidenses. Membresía deportiva incluida en el valor del lote. Barrio consolidado: 100% del desarrollo finalizado, 70% vendido.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_611181-MLA51491399038_092022-F.webp",
        availability: "Disponible",
        type: "Venta",
        address: "La Reserva Cardales, La Reserva Cardales, Campana, Buenos Aires Interior",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.2736354%2C-58.8988459&zoom=16&size=732x300&signature=kBMFOk7wCB7mNZqjbUyI9f8dBAw=",
      },
      {
        name: "Terrenos En Río Luján",
        categoryId: 3,
        price: 90000,
        description:
          "Es un emprendimiento de 72 has., 198 lotes de 1.500 m2 aprox., situado en el corredor Cardales-Río Luján (ruta 4 km. 2).-últimos lotes con posesión inmediata, hay 110 casas.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_824741-MLA51474072289_092022-F.webp",
        availability: "Disponible",
        type: "Venta",
        address: "Río Luján, Los Cardales, Exaltación de la Cruz, Buenos Aires Interior",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.2822659%2C-58.9192808&zoom=16&size=732x300&signature=MH50Xa130SbEnr_KHyvGjFLOOnU=",
      },
      {
        name: "Local En Venta Próximo A Plaza Colón Y Al Paseo Aldrey - Mar Del Plata",
        categoryId: 4,
        price: 68500,
        description:
          "VENTA Local a la calle ubicado en Lamadrid entre Falucho y Brown, ubicado a dos cuadras de Plaza Colón y a tres cuadras del Paseo Aldrey, Mar del Plata.Actualmente cuenta con pequeña recepción para clientes con división en hierro y vidrio, y luego se accede a la sala de oficina. Al fondo cuenta con espacio de guardado, ideal para deposito, y baño con antebaño. Posee pisos de porcelanato en todo el local y se entrega amoblado, con luminarias led y aire acondicionado frio calor. Cuenta con alama. Listo para ingresar.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_764422-MLA51508744830_092022-F.webp",
        availability: "Disponible",
        type: "Venta",
        address: "Lamadrid Al 2300, Plaza Colón, Mar del Plata, Bs.As. Costa Atlántica",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-38.0086851%2C-57.5432437&zoom=16&size=732x300&signature=zwTiSCxbvygFDC4JLF1-AZYE87U=",
      },
      {
        name: "Local A La Calle En Esquina. Sin Expensas",
        categoryId: 4,
        price: 200,
        description:
          "Local a la calle sobre esquina con baño. Ubicado en excelente zona a metros de Av. Congreso y Av. Triunvirato. Aumento semestral 30 % . contrato a 3 años.Requisitos:1 mes depósito último semestre/ 1 mes adelanto/ Garantía de Capital Federal / 5% + IVA honorarios inmobiliarios. NO APTO VEDULERIA/CARNICERIA.",
        images:
          "https://http2.mlstatic.com/D_NQ_NP_2X_836262-MLA51485958734_092022-F.webp",
        availability: "Disponible",
        type: "Alquiler",
        address: "Colodrero 3100, Villa Urquiza, Capital Federal, Capital Federal",
        location:
          "https://maps.googleapis.com/maps/api/staticmap?client=gme-mercadolibre&maptype=roadmap&scale=1&format=jpg&center=-34.5682297%2C-58.4899368&zoom=16&size=732x300&signature=qOIy8demY32srU63rGJurzFtCZ0=",
      },
  ]);
});
