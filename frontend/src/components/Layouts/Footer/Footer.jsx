import { useEffect, useState } from 'react';
// import WorkIcon from '@mui/icons-material/Work';
// import StarsIcon from '@mui/icons-material/Stars';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import HelpIcon from '@mui/icons-material/Help';
// import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

// const footerLinks = [
//   {
//     title: "about",
//     links: [
//       {
//         name: "Contact Us",
//         redirect: "https://www.flipkart.com/helpcentre",
//       },
//       {
//         name: "About Us",
//         redirect: "https://www.flipkart.com/about-us",
//       },
//       {
//         name: "Careers",
//         redirect: "https://www.flipkartcareers.com",
//       },
//       {
//         name: "Flipkart Stories",
//         redirect: "https://stories.flipkart.com",
//       },
//       {
//         name: "Press",
//         redirect: "https://stories.flipkart.com/category/top-stories/news",
//       },
//       {
//         name: "Flipkart Wholesale",
//         redirect: "https://www.flipkartwholesale.com",
//       },
//       {
//         name: "Corporate Information",
//         redirect: "https://www.flipkart.com/corporate-information",
//       },
//     ]
//   },
//   {
//     title: "help",
//     links: [
//       {
//         name: "Payments",
//         redirect: "https://www.flipkart.com/pages/payments",
//       },
//       {
//         name: "Shipping",
//         redirect: "https://www.flipkart.com/pages/shipping",
//       },
//       {
//         name: "Cancellation & Returns",
//         redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
//       },
//       {
//         name: "FAQ",
//         redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
//       }
//     ]
//   },
//   {
//     title: "policy",
//     links: [
//       {
//         name: "Return Policy",
//         redirect: "https://www.flipkart.com/pages/returnpolicy",
//       },
//       {
//         name: "Terms Of Use",
//         redirect: "https://www.flipkart.com/pages/terms",
//       },
//       {
//         name: "Security",
//         redirect: "https://www.flipkart.com/pages/paymentsecurity",
//       },
//       {
//         name: "Privacy",
//         redirect: "https://www.flipkart.com/pages/privacypolicy",
//       },
//       {
//         name: "Sitemap",
//         redirect: "https://www.flipkart.com/sitemap",
//       },
//       {
//         name: "EPR Compliance",
//         redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
//       },
//     ]
//   },
//   {
//     title: "social",
//     links: [
//       {
//         name: "Facebook",
//         redirect: "https://www.facebook.com/flipkart",
//       },
//       {
//         name: "Twitter",
//         redirect: "https://twitter.com/flipkart",
//       },
//       {
//         name: "YouTube",
//         redirect: "https://www.youtube.com/flipkart",
//       }
//     ]
//   }
// ]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className=" w-full  sm:py-4 px-4 sm:px-12 bg-black text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden static bottom-0">
            <div className="flex items-center justify-center w-full h-20 ">
              <p className=' h-5'>Copyright © 2023</p>
            </div>
          </footer>
        </>
      )}
    </>
  )
};

export default Footer;
