export default function Projects() {
  return (
    <div>
      <div className="text-white px-2 font-medium mb-4 text-lg">
        Checkout some of my personal projects
      </div>
      <div className="flex flex-wrap">
        <div className="sm:w-full lg:w-1/2 px-2">
          <a
            href="https://github.com/aka-achu/eidos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gray-900 text-white flex mb-4 w-full h-full">
              <div className="w-full  flex justify-start p-4 flex-col cursor-pointer">
                <div className="font-semibold font-mono text-lg">Eidos</div>
                <div className="font-sans py-2">
                  Eidos is a log rotation package for golang featuring file size
                  based log rotation, interval based rotation, log retention,
                  compression and support for user defined callback operations.
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="sm:w-full lg:w-1/2 px-2">
          <div className="bg-gray-900 text-white flex mb-4 w-full h-full">
            <div className="w-full flex justify-start p-4 flex-col">
              <div className="font-semibold font-mono text-lg">Watcher</div>
              <div className="font-sans py-2">
                Watcher is a etcd cluster viewer.
              </div>
              <div className="font-bold py-2 uppercase text-center">
                coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
