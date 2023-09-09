import MainTopics from "../../components/MainTopics"

export default function Home() {
  const headline = "Hi there! I am a full stack developer with 2 years of experience building dynamic and responsive web applications. I have a strong background in both front-end and back-end development ."
  const description = "If you're looking for a skilled full stack developer who can help bring your web application to life, I'd love to hear from you!"

  return (
    <main>
      <div className="w-[70%] m-auto text-center">
        <h3>{headline}</h3>
        <h3>{description}</h3>
      </div>
    </main>
  )
}
