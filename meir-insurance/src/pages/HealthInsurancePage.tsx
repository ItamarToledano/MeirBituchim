import { useEffect, useState } from "react";

const HealthInsurancePage: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch("/HealthInsurance.html"); // Adjust the path as per your file location
        if (!response.ok) {
          throw new Error("Failed to fetch HTML");
        }
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchHTMLContent();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HealthInsurancePage;
