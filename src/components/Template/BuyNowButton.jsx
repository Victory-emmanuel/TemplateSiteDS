/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const BuyNowButton = ({ template }) => {
  const handleBuyNow = () => {
    const message = `Hi, I'm interested in the "${template.name}" template:
    
Category: ${template.category}
Price: $${template.discountPrice || template.price}
Pages: ${template.pages}
Image: ${template.image}
Preview: ${template.previewUrl}

Can you provide more information?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = ` https://wa.me/2348109125793?text=${encodedMessage}`; // Replace with your actual WhatsApp number

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      size="sm"
      className="bg-accent text-black flex-grow"
      onClick={handleBuyNow}
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
