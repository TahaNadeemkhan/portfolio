import { useState } from "react"
import { PROJECTS } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const openVideoModal = (videoSrc) => {
    setSelectedVideo(videoSrc)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {project.image.endsWith(".mp4") ? (
                <div className="relative cursor-pointer group" onClick={() => openVideoModal(project.image)}>
                  <video width={150} height={150} className="mb-6 rounded">
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded">
                    <span className="text-white font-medium">Play Video</span>
                  </div>
                </div>
              ) : (
                <img
                  src={project.image || "/placeholder.svg"}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
              >
                View on Streamlit
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl rounded-lg bg-black overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute right-3 top-3 z-10 rounded-full bg-black bg-opacity-70 p-2 text-white hover:bg-opacity-100 transition-all"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <video controls autoPlay className="w-full h-auto">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
