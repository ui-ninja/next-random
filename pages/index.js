export default function Random({ person }) {
  return (
    <>
      <h1>Random person:</h1>
      <h3>
        {person.name.first}
        {person.name.last}
      </h3>
      <img src={person.picture.thumbnail} alt={person.name.first} />
    </>
  );
}

export async function getStaticProps() {
  const res = await (await fetch('https://randomuser.me/api/')).json();
  return {
    props: {
      person: res.results[0],
    },
  };
}
