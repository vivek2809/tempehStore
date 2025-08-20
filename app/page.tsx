
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/Header';

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      condiments: {
        title: "CONDIMENTS",
        subtitle: "NATURAL FLAVOR BOOSTERS",
        description: "Welcome the first CONTEMPORARY CONDIMENTS. These are products that take Nordic legumes in exciting new directions, pushing the boundaries of how they can be fermented and how much umami we can create with them!"
      },
      recipes: {
        title: "RECIPES",
        subtitle: "FIND INSPIRATION FOR DELICIOUS MEALS WITH TEMPEH",
        description: "Tempeh is a new element in Nordic cuisine. But fortunately, it's easy to prepare delicious and healthy meals with tempeh, as it can be used in countless ways. See how here."
      },
      shop: {
        title: "SHOP",
        subtitle: "HERE YOU CAN BUY TEMPEH DIRECTLY FROM US",
        description: "We offer online ordering of Nordic Tempeh, with home delivery throughout Denmark! You're also welcome to visit our production facility located in Anneberg Culture Park, Odsherred - but please contact us in advance for an appointment, thank you."
      },
      reviews: {
        title: "REVIEWS ARE GOLD",
        subtitle: "OUR PRODUCTS ARE BEING WRITTEN AND TALKED ABOUT",
        description: "For a foodtech startup like us, glowing reviews and prestigious awards work as sustainable fuel that gives a wonderful boost to continue the wild development. To emphasize quality and illustrate the possibilities in Nordic Tempeh, we'd like to share some of the highlights with you here..."
      },
      about: {
        title: "ABOUT US",
        subtitle: "WHO, WHAT, WHERE AND WHY",
        description: "A couple with a mission: to create a new, completely plant-based and sustainable food that we ourselves are passionate about. A journey that has taken us from Bali to Odsherred, where we have received good help along the way."
      },
      questions: {
        title: "QUESTIONS & ANSWERS",
        subtitle: "LEARN ABOUT TEMPEH",
        description: "We get many good questions about tempeh. Here we try to collect and answer them all."
      },
      retailers: {
        title: "RETAILERS",
        subtitle: "RESTAURANTS & STORES",
        description: "See here where you can find our tempeh. And also see here if you're interested in selling our tempeh in a store or putting it on the menu at your restaurant, thank you."
      }
    },
    no: {
      condiments: {
        title: "CONDIMENTS",
        subtitle: "NATURLIGE SMAGSBOOSTERE",
        description: "Tag godt imod de første CONTEMPEHRARY CONDIMENTS. Dette er produkter, der tager nordiske bælgfrugter i nye spændende retninger, rykker grænserne for hvordan de kan fermenteres, samt hvor meget umami vi kan frembringe med dem!"
      },
      recipes: {
        title: "OPSKRIFTER",
        subtitle: "FIND INSPIRATION TIL LÆKRE MÅLTIDER MED TEMPEH",
        description: "Tempeh er et nyt element i det nordiske køkken. Men heldigvis er det nemt at lave lækre og sunde måltider med tempeh, da det kan anvendes på utallige måder. Se hvordan her."
      },
      shop: {
        title: "BUTIK",
        subtitle: "HER KAN DU KØBE TEMPEH DIREKTE FRA OS",
        description: "Vi tilbyder online bestilling af Nordisk Tempeh, med hjemmelevering i hele Danmark! Du er også velkommen til at besøge vores produktion beliggende i Anneberg Kulturpark, Odsherred - men kontakt os gerne på forhånd for en aftale, tak."
      },
      reviews: {
        title: "ANMELDELSER ER GULD",
        subtitle: "VORES PRODUKTER BLIVER SKREVET OG TALT OM",
        description: "For en foodtech startup som os virker gode anmeldelser og prestigefyldte priser som bæredygtigt brændstof, der giver et dejligt boost til at fortsætte den vilde udvikling. For at fremhæve kvalitet og illustrere mulighederne i Nordisk Tempeh, vil vi gerne dele nogle af højdepunkterne med dig her..."
      },
      about: {
        title: "OM OS",
        subtitle: "HVEM, HVAD, HVOR OG HVORFOR",
        description: "Et par med en mission: at skabe en ny, helt plantebaseret og bæredygtig mad, som vi selv brænder for. En rejse der har ført os fra Bali til Odsherred, hvor vi har fået god hjælp undervejs."
      },
      questions: {
        title: "SPØRGSMÅL & SVAR",
        subtitle: "LÆR OM TEMPEH",
        description: "Vi får mange gode spørgsmål om tempeh. Her prøver vi at samle og besvare dem alle."
      },
      retailers: {
        title: "FORHANDLERE",
        subtitle: "RESTAURANTER & BUTIKKER",
        description: "Se her hvor du kan finde vores tempeh. Og se også her hvis du er interesseret i at sælge vores tempeh i en butik eller sætte det på menuen på din restaurant, tak."
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].condiments.title}
            subtitle={content[language].condiments.subtitle}
            description={content[language].condiments.description}
            imageUrl="./assets/section-2.png"
            href="/condiments"
            imageLeft={false}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.25)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].recipes.title}
            subtitle={content[language].recipes.subtitle}
            description={content[language].recipes.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/6afb52e97ac36a7e3c7600d548344f21.png"
            href="/recipes"
            imageLeft={true}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].shop.title}
            subtitle={content[language].shop.subtitle}
            description={content[language].shop.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/d4c829cd94e6db3690f08763f6578b8a.png"
            href="/shop"
            imageLeft={false}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.25)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].reviews.title}
            subtitle={content[language].reviews.subtitle}
            description={content[language].reviews.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/1f8e19786852a4d49260f370dc941d88.png"
            href="/reviews"
            imageLeft={true}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].about.title}
            subtitle={content[language].about.subtitle}
            description={content[language].about.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/2d7ee87ae3bee83209ece3210f199952.png"
            href="/about"
            imageLeft={false}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.25)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].questions.title}
            subtitle={content[language].questions.subtitle}
            description={content[language].questions.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/5d9f3aedf2dbb69795ff1fc09f00f6b0.png"
            href="/knowledge"
            imageLeft={true}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <ProductSection
            title={content[language].retailers.title}
            subtitle={content[language].retailers.subtitle}
            description={content[language].retailers.description}
            imageUrl="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/fb224e8ef180ac4ab5dde742f943cc1d.png"
            href="/retailers"
            imageLeft={false}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
