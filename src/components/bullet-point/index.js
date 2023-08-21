export default async function BulletPoint({ color }) {
  console.log({ color });
  return <span style={{ color: `#${color}` }}>&#9724;</span>;
}
