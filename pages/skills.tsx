import NextImage from "next/image"

function Image({
  src,
  link,
  height = 25,
  width = 25,
}: {
  src: string
  link: string
  height?: number
  width?: number
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-10 h-10 bg-white rounded-full">
        <div className="w-full h-full rounded-full cursor-pointer image-mask flex justify-center">
          <NextImage
            src={src}
            className="object-scale-down object-center h-full w-full my-auto"
            width={width}
            height={height}
          />
        </div>
      </div>
    </a>
  )
}

function SkillBar({
  name,
  imgPathPrefix,
  images,
}: {
  name: string
  imgPathPrefix: string
  images: Array<{ file: string; link: string; height?: number; width?: number }>
}) {
  return (
    <div className="bg-gray-1 text-white flex mb-4 w-full">
      <div className="w-1/4 h-12 flex justify-center">
        <div className="my-auto font-semibold">{name}</div>
      </div>
      <div className="bg-red-700 w-1 h-10 my-auto" />
      <div className="mx-8">
        <div className="w-3/4 h-12 flex -mx-2 align-middle">
          {images.map((image) => (
            <div className="px-2 my-auto" key={image.file}>
              <Image
                src={`${imgPathPrefix}/${image.file}`}
                link={image.link}
                height={image.height}
                width={image.width}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="flex flex-wrap h-full">
      <div className="sm:w-full lg:w-1/2 px-2">
        <SkillBar
          name="Languages"
          imgPathPrefix="/images/skills/languages"
          images={[
            {
              file: "go-language-icon.png",
              link: "https://golang.org",
            },
            {
              file: "icon0.png",
              link: "https://en.wikipedia.org/wiki/C_(programming_language)",
            },
            { file: "python.png", link: "https://www.python.org" },
          ]}
        />
        <SkillBar
          name="CI / CD"
          imgPathPrefix="/images/skills/cicd"
          images={[
            {
              file: "argo.png",
              link: "https://argoproj.github.io/argo-cd/",
              height: 30,
              width: 30,
            },
            { file: "fluxcd.png", link: "https://fluxcd.io/" },
            {
              file: "gitactions.png",
              link: "https://github.com/features/actions",
            },
            {
              file: "teamcity.png",
              link: "https://www.jetbrains.com/teamcity/",
            },
            {
              file: "travis.png",
              link: "https://travis-ci.org/",
              height: 30,
              width: 30,
            },
          ]}
        />
        <SkillBar
          name="Deployment"
          imgPathPrefix="/images/skills/deployment"
          images={[
            {
              file: "docker.png",
              link: "https://www.docker.com/",
              height: 30,
              width: 30,
            },
            {
              file: "kubernetes-logo.png",
              link: "https://kubernetes.io",
              height: 30,
              width: 30,
            },
            {
              file: "kubeflow.png",
              link: "https://www.kubeflow.org",
              height: 30,
              width: 30,
            },
            { file: "openfaas.png", link: "https://www.openfaas.com" },
          ]}
        />
        <SkillBar
          name="Service Mesh"
          imgPathPrefix="/images/skills/service_mesh"
          images={[
            { file: "envoy.png", link: "https://www.envoyproxy.io/" },
            { file: "istio.png", link: "https://istio.io" },
            { file: "nginx.png", link: "https://www.nginx.com" },
            { file: "linkerd.png", link: "https://linkerd.io" },
            { file: "consul.png", link: "https://www.consul.io" },
          ]}
        />
        <SkillBar
          name="CSP"
          imgPathPrefix="/images/skills/csp"
          images={[
            { file: "aws.png", link: "https://aws.amazon.com" },
            {
              file: "digital-ocean.png",
              link: "https://www.digitalocean.com/",
            },
            { file: "google-cloud.png", link: "https://cloud.google.com" },
          ]}
        />
        <SkillBar
          name="Datastore"
          imgPathPrefix="/images/skills/data_store"
          images={[
            {
              file: "MINIO_Bird.png",
              link: "https://min.io",
              height: 15,
              width: 15,
            },
            { file: "mongodb.png", link: "https://www.mongodb.com" },
            { file: "postgresql.png", link: "https://www.postgresql.org" },
            { file: "prestodb-icon.png", link: "https://prestodb.io/" },
          ]}
        />

        <SkillBar
          name="Frameworks"
          imgPathPrefix="/images/skills/frameworks"
          images={[
            { file: "grpc.png", link: "https://grpc.io" },
            {
              file: "rest.png",
              link:
                "https://en.wikipedia.org/wiki/Representational_state_transfer",
            },
          ]}
        />
      </div>
      <div className="sm:w-full lg:w-1/2 px-2">
        <SkillBar
          name="Telemetery"
          imgPathPrefix="/images/skills/monitoring_telemetry"
          images={[
            { file: "elk.png", link: "https://www.elastic.co" },
            { file: "logo.png", link: "https://grafana.com" },
            { file: "prometheus.png", link: "https://prometheus.io" },
            {
              file: "telegraf.png",
              link: "https://www.influxdata.com/time-series-platform/telegraf",
            },
          ]}
        />
        <SkillBar
          name="Infra Mgmt"
          imgPathPrefix="/images/skills/infrastructure_management"
          images={[
            {
              file: "icon0.png",
              link: "https://www.terraform.io",
              height: 30,
              width: 30,
            },
          ]}
        />
        <SkillBar
          name="KV Store"
          imgPathPrefix="/images/skills/kv_store_cache"
          images={[
            { file: "icon0.png", link: "https://etcd.io" },
            { file: "redis.png", link: "https://redis.io" },
          ]}
        />
        <SkillBar
          name="Secret Mgmt"
          imgPathPrefix="/images/skills/secret_management"
          images={[
            {
              file: "vault-enterprise.png",
              link: "https://www.vaultproject.io",
            },
          ]}
        />

        <SkillBar
          name="UI / UX"
          imgPathPrefix="/images/skills/ui_ux"
          images={[
            {
              file: "illustrator.png",
              link: "https://www.adobe.com/in/products/illustrator.html",
            },
            {
              file: "xd.png",
              link: "https://www.adobe.com/in/products/xd.html",
            },
          ]}
        />
        <SkillBar
          name="Blockchain"
          imgPathPrefix="/images/skills/blockchain"
          images={[
            {
              file: "0.png",
              link: "https://www.hyperledger.org",
              height: 40,
              width: 40,
            },
          ]}
        />
      </div>
    </div>
  )
}
