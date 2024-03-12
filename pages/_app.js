import "@/styles/globals.css";
import CustomNavbar from "@/components/CustomNavbar";

export default function App({ Component, pageProps }) {
  return <>
  <CustomNavbar/>
  <Component {...pageProps} />;
  </>
}
