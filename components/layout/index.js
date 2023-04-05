import NavigationBar from "../navigation";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
