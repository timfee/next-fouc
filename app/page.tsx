export default async function Home() {
  await fetch("http://worldtimeapi.org/api/timezone/America/New_York").then(
    (res) => res.json()
  )

  return (
    <div>
      Hello I am a page! Bye! Nice? Great!{" "}
      <p>
        New tag!! <br /> So much flash!
        <br /> No more! <br /> <br /> <br /> <br /> <br /> <br /> <br /> Ok, a
        little Not now@
      </p>
    </div>
  )
}
