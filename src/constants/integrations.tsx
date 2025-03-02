import { InstagramDuoToneBlue } from "@/icons/instagram-duotone-blue";
import { SalesForceDuoToneBlue } from "@/icons/salesforce-duotone-blue";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARD: Props[] = [
    {
        title: "Connect Instagram",
        description: "Integrate your account to an instagram user",
        icon: <InstagramDuoToneBlue />,
        strategy: "INSTAGRAM",
      },
      {
        title: "Connect Salesforce",
        description: "Integrate your account to a Connect Salesforce user",
        icon: <SalesForceDuoToneBlue />,
        strategy: "CRM",
      },
];
