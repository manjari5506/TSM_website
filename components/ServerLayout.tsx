import { getMessages } from "next-intl/server";
import ClientLayout from "./ClientLayout";

export default async function ServerLayout({ children, locale }) {
  const messages = await getMessages(locale); // Fetch messages based on locale

  return <ClientLayout messages={messages}>{children}</ClientLayout>;
}
