import PropTypes from "prop-types";
// import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    // <Helmet>
    //   <meta charSet="utf-8" />
    //   <title>{title}</title>
    //   <meta
    //     name="description"
    //     content="Automate Community Management with AI-Powered
    //       Subscription effortlessly
    //       Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
    //   />
    //   <meta name="format-detection" content="telephone=no" />
    //   <meta
    //     name="author"
    //     content="Automate Community Management with AI-Powered
    //       Subscription effortlessly
    //       Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
    //   />
    //   <meta
    //     name="keywords"
    //     content="Automate Community Management with AI-Powered
    //       Subscription effortlessly
    //       Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
    //   />
    // </Helmet>
    <h1>{title}</h1>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SEO;
