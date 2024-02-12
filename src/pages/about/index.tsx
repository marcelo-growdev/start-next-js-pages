export default function About() {
  return <h1>Sobre</h1>;
}

About.getLayout = function getLayout(page: any) {
  return (
    <div>
      <div style={{ backgroundColor: "blueviolet" }}>{page}</div>
    </div>
  );
};
