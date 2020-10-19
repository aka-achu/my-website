export default function About() {
  return (
    <div className="flex items-center justify-between  h-full w-1/2 px-8">
      <div className="h-full text-white">
        <div className="text-3xl">-About Me</div>
        <div className="mt-8 font-semibold text-justify">
          I am a passionate and creative developer with a strong interest in
          golang and Cloud-Native technologies and proven experience in
          architecting, creating, deploying, managing distributed applications
          and infrastructure management.
        </div>
        <div className="flex justify-end mt-8">
          <img src="/images/sign.png" alt="signature" />
        </div>
      </div>
    </div>
  )
}
