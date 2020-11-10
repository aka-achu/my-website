function Image({ src }: { src: string }) {
  return (
    <div className="w-10 h-10">
      <div className="w-full h-full rounded-full cursor-pointer">
        <img
          src={src}
          className="object-scale-down object-center w-full h-full visible"
        />
      </div>
    </div>
  )
}

function SkillBar({
  name,
  imgPathPrefix,
  images,
}: {
  name: string
  imgPathPrefix: string
  images: string[]
}) {
  return (
    <div className="bg-gray-900 text-white flex mb-4 w-full">
      <div className="w-2/5 h-12 flex justify-center">
        <div className="my-auto font-semibold">{name}</div>
      </div>
      <div className="bg-red-700 w-1 h-10 my-auto" />
      <div className="mx-8">
        <div className="w-3/5 h-12 flex -mx-2 align-middle">
          {images.map((name) => (
            <div className="px-2 my-auto">
              <Image src={`${imgPathPrefix}/${name}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="flex flex-wrap">
      <div className="sm:w-full lg:w-1/2 px-2">
        <SkillBar
          name="Languages"
          imgPathPrefix="/images/skills/languages"
          images={["golang.png", "icon0.png", "python.png"]}
        />
        <SkillBar
          name="Blockchain"
          imgPathPrefix="/images/skills/blockchain"
          images={["0.png"]}
        />
        <SkillBar
          name="CI / CD"
          imgPathPrefix="/images/skills/cicd"
          images={[
            "argo.png",
            "fluxcd.png",
            "gitactions.png",
            "teamcity.png",
            "travis.png",
          ]}
        />
        <SkillBar
          name="CSP"
          imgPathPrefix="/images/skills/csp"
          images={["aws.png", "digital-ocean.png", "google-cloud.png"]}
        />
        <SkillBar
          name="Datastore"
          imgPathPrefix="/images/skills/data_store"
          images={[
            "MINIO_Bird.png",
            "mongodb.png",
            "postgresql.png",
            "presto-logo.png",
          ]}
        />
        <SkillBar
          name="Deployment"
          imgPathPrefix="/images/skills/deployment"
          images={["docker.png", "kubernetes-logo.png", "linkerd.png"]}
        />
        <SkillBar
          name="Frameworks"
          imgPathPrefix="/images/skills/frameworks"
          images={["grpc.png", "rest.png"]}
        />
      </div>
      <div className="sm:w-full lg:w-1/2 px-2">
        <SkillBar
          name="Infrastructure Management"
          imgPathPrefix="/images/skills/infrastructure_management"
          images={["icon0.png"]}
        />
        <SkillBar
          name="KV Store / Cache"
          imgPathPrefix="/images/skills/kv_store_cache"
          images={["icon0.png", "redis.png"]}
        />
        <SkillBar
          name="Monitoring / Telemetery"
          imgPathPrefix="/images/skills/monitoring_telemetry"
          images={["elk.png", "logo.png", "prometheus.png", "telegraf.png"]}
        />
        <SkillBar
          name="Secret Management"
          imgPathPrefix="/images/skills/secret_management"
          images={["vault-enterprise.png"]}
        />
        <SkillBar
          name="Service Mesh"
          imgPathPrefix="/images/skills/service_mesh"
          images={["envoy.png", "icon0.png", "icon1.png"]}
        />
        <SkillBar
          name="UI / UX"
          imgPathPrefix="/images/skills/ui_ux"
          images={["illustrator.png", "xd.png"]}
        />
      </div>
    </div>
  )
}
