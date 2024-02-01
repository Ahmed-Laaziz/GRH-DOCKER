// init-mongo.js
db = db.getSiblingDB('test');

db.agents.insertMany([
  {
    nom: 'admin',
    prenom: 'admin',
    email: 'admin@admin.com',
    password: '123',
    genre: 'Homme',
    fonction: 'Secrétaire',
    departement: '__',
    __t: 'Admin'
  },
  {
    nom: 'chef',
    prenom: 'chef',
    email: 'chef@chef-tri.com',
    password: '123',
    genre: 'Homme',
    fonction: 'Chef de Département',
    departement: 'TRI',
    __t:'Admin'
  },
  {
    nom: 'chef',
    prenom: 'chef',
    email: 'chef@chef-fct.com',
    password: '123',
    genre: 'Homme',
    fonction: 'Chef de Département',
    departement: 'FCT',
    __t:'Admin'
  },
  {
    nom: 'chef',
    prenom: 'chef',
    email: 'chef@chef-stin.com',
    password: '123',
    genre: 'Homme',
    fonction: 'Chef de Département',
    departement: 'STIN',
    __t:'Admin'
  },

  //////////////////////////

  {
    nom: 'OUAHMANE',
    prenom: 'Hassan',
    email: 'ouahmane@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'EL HASSANI',
    prenom: 'Sanaa',
    email: 'elhassani@tri.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'EL JOURMI',
    prenom: 'Mohamed',
    email: 'eljourmi@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'AQQAL',
    prenom: 'Abdelhak',
    email: 'aqqal@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'EL HANNANI',
    prenom: 'Asmaa',
    email: 'elhannani@tri.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'DAHBI',
    prenom: 'Aziz',
    email: 'dahbi@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'KARTIT',
    prenom: 'Ali',
    email: 'kartit@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'HAIDINE',
    prenom: 'Abdelfatteh',
    email: 'haidine@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'FERTAT',
    prenom: 'Mohammed',
    email: 'fertat@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'ASSAD',
    prenom: 'Noureddine',
    email: 'assad@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'KALLOUBI',
    prenom: 'Fahd',
    email: 'kalloubi@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'EL BOUJENOUNI',
    prenom: 'Mohamed',
    email: 'elboujenouni@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'HANINE',
    prenom: 'Mohamed',
    email: 'hanine@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'LACHGAR',
    prenom: 'Mohamed',
    email: 'lachgar@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'BAIDADA',
    prenom: 'Chafik',
    email: 'baidada@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'ERRATTAHI',
    prenom: 'Rahhal',
    email: 'errattahi@tri.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'SELMAN',
    prenom: 'Fatimazahra',
    email: 'selman@tri.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'TRI'
  },
  {
    nom: 'ABOUZAID',
    prenom: 'B',
    email: 'abouzaid@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ABOULMAHJOUB',
    prenom: 'Y',
    email: 'aboulmahjoub@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ASSIF',
    prenom: 'S',
    email: 'assif@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'BELHORA',
    prenom: 'F',
    email: 'belhora@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL AZZOUZI',
    prenom: 'M',
    email: 'elazzouzi@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL JOUAD',
    prenom: 'M',
    email: 'eljouad@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ELBOUZEKRI ELIDRISSI',
    prenom: 'M',
    email: 'elbouzekri@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'LAASRI',
    prenom: 'S',
    email: 'laasri@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'RAHMANI',
    prenom: 'H',
    email: 'rahmani@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'SADEK',
    prenom: 'M',
    email: 'sadek@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'SALHI',
    prenom: 'I',
    email: 'salhi@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'YESSARI',
    prenom: 'M',
    email: 'yessari@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ACHAK',
    prenom: 'M',
    email: 'achak@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'AMRANI SOUHLI',
    prenom: 'H',
    email: 'amrani@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'CHAIKHY',
    prenom: 'H',
    email: 'chaikhy@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL BALLOUTI',
    prenom: 'A',
    email: 'elballouti@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL MOUDEN',
    prenom: 'M',
    email: 'elmouden@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL OTMANI',
    prenom: 'R',
    email: 'elotmani@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'HAJJAJI',
    prenom: 'A',
    email: 'hajjaji@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'KANDOUSSI',
    prenom: 'K',
    email: 'kandoussi@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'TOUHTOUH',
    prenom: 'S',
    email: 'touhtouh@stin.com',
    password: '123',
    genre: 'Femme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'BOUTAHAR',
    prenom: 'A',
    email: 'boutahar@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ABOUOBAIDA',
    prenom: 'H',
    email: 'abouobaida@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'LAADISSI',
    prenom: 'E',
    email: 'laadissi@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'HAMMADI',
    prenom: 'L',
    email: 'hammadi@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'KADDAR',
    prenom: 'A',
    email: 'kaddar@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'FAITAH',
    prenom: 'K',
    email: 'faitah@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'LOUALID',
    prenom: 'E',
    email: 'loualid@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'LAHLOU',
    prenom: 'M',
    email: 'lahlou@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ENNAWAOUI',
    prenom: 'C',
    email: 'ennawaoui@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'ALAOUI BELGHITI',
    prenom: 'A',
    email: 'belghiti@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'LOUZAZNI',
    prenom: 'M',
    email: 'louzazni@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL HALOUI',
    prenom: 'Y',
    email: 'elhaloui@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL KHOUDRI',
    prenom: 'M',
    email: 'elkhoudri@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'RIYAD',
    prenom: 'Y',
    email: 'riyad@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL MOUDDEN',
    prenom: 'M',
    email: 'elmoudden@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  },
  {
    nom: 'EL MOUTAKI',
    prenom: 'S',
    email: 'elmoutaki@stin.com',
    password: '123',
    genre: 'Homme',
    __t: 'Professeur',
    departement: 'STIN'
  }

]);
