import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center flex-col gap-5 mb-14">
          <span className="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
            My Recent Projects
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
            Explore some of my most recent work, showcasing my skills in web
            design, development, and creative problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
          <div
            className="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url(https://pagedone.io/asset/uploads/1707712993.png)", // Replace with your project image
            }}
          >
            <h6 className="font-medium text-xl leading-8 text-white mb-4">
              Web Application Design
            </h6>
            <p className="text-base font-normal text-white/70">
              A seamless, user-centered web application designed to enhance user
              experience and performance.
            </p>
          </div>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1707713007.png" // Replace with your project image
              alt="Project image"
              className="w-full rounded-lg object-cover"
              width={1000} // Adjust to the image's actual or desired width
              height={600} // Adjust to the image's actual or desired height
            />
          </div>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1707713018.png" // Replace with your project image
              alt="Project image"
              className="w-full rounded-lg object-cover"
              width={500} // Set the appropriate width of your image
              height={300} // Set the appropriate height of your image
            />
          </div>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1707713032.png" // Replace with your project image
              alt="Project image"
              className="w-full rounded-lg object-cover"
              width={500} // Specify the width of the image
              height={300} // Specify the height of the image
            />
          </div>
          <div
            className="bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url(https://pagedone.io/asset/uploads/1707713043.png)", // Replace with your project image
            }}
          >
            <h6 className="font-medium text-xl leading-8 text-white mb-4">
              E-Commerce Platform
            </h6>
            <p className="text-base font-normal text-white/70">
              Developed a responsive, feature-rich platform designed to offer an
              excellent shopping experience.
            </p>
          </div>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1707713055.png" // Replace with your project image
              alt="Project image"
              className="w-full rounded-lg object-cover"
              width={500} // Specify a width for the image
              height={300} // Specify a height for the image
            />
          </div>
          <div
            className="bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url(https://pagedone.io/asset/uploads/1707713066.png)", // Replace with your project image
            }}
          >
            <h6 className="font-medium text-xl leading-8 text-white mb-4">
              Personal Blog
            </h6>
            <p className="text-base font-normal text-white/70">
              A fully responsive personal blog platform designed to share ideas,
              stories, and tutorials.
            </p>
          </div>
        </div>
        <button className="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
          Load More
        </button>
      </div>
    </section>
  );
}
