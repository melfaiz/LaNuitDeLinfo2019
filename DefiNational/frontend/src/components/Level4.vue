<template>

  <div id="app"><VueFaqAccordion :items="myItems" />
  <div class="countdown">
            <circular-count-down-timer :initial-value="90" @finish="finished" style="margin-left: 37%" size="100" :show-hour="false"></circular-count-down-timer>
    </div>

  <div id="app">
    <p><button v-on:click="counter += 1">Passer Ce Niveau</button></p>
  </div>
  <div v-if="counter == 5">
    Voir dans la séction transport.
  </div>
  </div>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
  name: "App",
  components: {
    VueFaqAccordion
  },
  finished: () => {
        this.router.push("#");
  },
  data() {
    return {
      counter:0,
      myItems: [
        {
          title: "Qui contacté pour passer ce niveau ?",
          value:
            "Cliquez sur le bouton 'passer le niveau' 5 fois.",
          category: "Logement"
        },
        {
          title: "Je suis étudiant. Où pourrais je trouver un logement?",
          value:
            "Il y a plusieurs site où vous pouvez chercher un logement dont <a href=\"https://www.etudiant.gouv.fr/\"> le Crous </a>, <a href=\"https://www.lokaviz.fr/\"> Lokaviz </a>, <a href=\"https://www.nexity-studea.com/locations-etudiantes/paris\"> Studea </a> ou encore <a href=\"https://www.leboncoin.fr/\"> chez des particuliers </a>",
          category: "Logement"
        },
        {
          title: "Est ce que je pourrais savoir le montant des aides ?",
          value:
            "La CAF a créé un simulateur auquel vous pouvez accéder par <a href=\"http://www.caf.fr/allocataires/mes-services-en-ligne/faire-une-simulation\"> ici </a>",
          category: "Logement"
        },
        {
          title: "Que-ce qu'une complémentaire santé ?",
          value:
            "En France, l'assurance maladie complémentaire (AMC), ou complémentaire santé, est un système d'assurance maladie qui complète celui de la Sécurité sociale en intervenant sous forme d'un complément de remboursement des soins.",
          category: "Santé"
        },
        {
          title: "Que-ce que la CMU?",
          value:
            "La CMU permet aux personnes ayant de faibles revenus (personnes touchant le RMI, chômeurs en fin de droits, chômeurs…) d’être affilié à l’assurance maladie et de bénéficier des mêmes soins que les personnes affiliées aux autres régimes de la sécurité sociale.",
          category: "Santé"
        },
        {
          title: "Qui peut bénificier de la CMU?",
          value: "si vous bénéficiez de la prise en charge de vos frais de santé par l'Assurance Maladie en raison de votre activité professionnelle ou de votre résidence stable et régulière en France ou si vos ressources sont inférieures à un montant qui dépend de la composition de votre foyer.",
          category: "Santé"
        },
        {
          title: "Où trouver les informations concernant la CMU?",
          value: "Pour accéder au site de la CMU, cliquez <a href=\"https://www.ameli.fr/gironde/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/complementaire-sante-solidaire-qui-peut-en-beneficier-et-comment#text_90553\"> ici </a>",
          category: "Santé"
        },
        {
          title: "Comment pourrais je bénificier d'une bourse pour payer mes études ?",
          value:
            "Les BCS (bourses sur critères sociaux) sont accordées au moins de 28 ans en fonction du revenu des parents, du nombre d'enfants à charge, de l'éloignement domicile-lieu d'études, du diplôme et de la nationalité. Pour en bénéficier, l'étudiant doit être présent aux cours et aux examens, et progresser normalement des ses études. Le montant est variable : de la seule exonération des droits d’inscription et de CVEC (contribution vie étudiante et de campus) à 5 612 € environ sur 10 mois. Pour y accéder, cliquez <a href=\"https://www.messervices.etudiant.gouv.fr/envole/\"> ici </a>",
          category: "Études"
        },
        {
          title: "Est ce qu'il y a un autre type de bourse pour payer mes études ?",
          value:
            "L'aide au mérite est un complément versé aux boursiers BCS et aux allocataires d'une aide spécifique annuelle qui ont obtenu la mention \"très bien\" au bac. Son montant est de 900 € pour les bacheliers 2019. Elle est versée en 9 fois.",
          category: "Études"
        },
        {
          title: "Est ce qu'il y a un autre moyen pour payer mes études ?",
          value:
            "Contactez la direction de votre école pour négotier une éxoneration si possible.",
          category: "Études"
        },
        {
          title: "Est ce que je pourrais savoir le montant de cette bourse ?",
          value:
            "Il y a un simulateur de bourse. Pour y accéder, cliquez <a href=\"https://simulateur.lescrous.fr/\"> ici </a>",
          category: "Études"
        },
        {
          title: "Est ce qu'il y a un moyen pour financer des études en Europe ?",
          value:
            "L'allocation Erasmus + est attribuée aux étudiants effectuant une partie de leurs études en Europe dans le cadre d'un échange inter-établissements. Informations auprès du service des relations internationales de son établissement 6 à 12 mois à l'avance. Cette aide est cumulable avec la bourse BCS.",
          category: "Études"
        },
        {
          title: "Est ce qu'il y a un moyen pour financer des études à l'internationale ?",
          value:
          "L'aide à la mobilité internationale, d'un montant de 400 € par mois, est un complément versé, entre autre, aux boursiers BCS pour des séjours d'études à l'étranger compris entre 2 et 9 mois consécutifs. S'adresser au service des relations internationales de son établissement, qui sélectionne les étudiants. L'aide est versée par l'établissement. Elle est cumulable avec l'aide au mérite.",
          category: "Études"
        },
        {
          title: "Où pourrais je trouver les détails de ces bourses ?",
          value:
          "<a href=\"http://www.onisep.fr/Choisir-mes-etudes/Apres-le-bac/La-vie-etudiante/Financer-ses-etudes-bourses-aides-prets\"> Ce lien </a> contient plus de détails sur plusieurs types de bourses.", 
          category: "Études"
        },
        {
          title: "Est ce qu'il y a des réductions pour les étudiants ?",
          value:
            "Contactez la société de transport correspendante à votre ville pour avoir plus d'informations.",
          category: "Transport"
        },
        {
          title: "Qu'est ce que la tarifaction solidaire ?",
          value:
            "La Carte Solidaire permet de bénéficier jusqu'à 80% de réduction sur les trajets en trains et cars régionaux. Pour la Nouvelle Aquitaine, visitez <a href=\"https://transports.nouvelle-aquitaine.fr/fr/actualite/nouveau-tarif-solidaire-pour-trajets-en-trains-cars-regionaux\"> ce site </a>",
          category: "Transport"
        },
        {
          title: "Comment passer ce niveau ?",
          value:
            "Il suffit de cliquer <a href=\"#/Level5/\"> ici </a> ",
          category: "Transport"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
}
</style>
