import React from 'react'
import cloud from './images/cloudst.webp'

function About() {
  return (
    <>
      <div className='container flex col-md-3 mb-1'>
        <a href="/" className="flex flex-col items-center bg-black rounded-lg border shadow-md md:flex-row md:max-w-3xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full p-4 h-60 rounded-2xl md:h-auto md:w-56 md:rounded-xl md:rounded-l-lg" src={cloud} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Cloud Storage</h5>
            <p className="mb-3 font-normal text-gray-200 dark:text-white">
              Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service. It's delivered on demand with just-in-time capacity and costs, and eliminates buying and managing your own data storage infrastructure.</p>
          </div>
        </a>
        <div className='mx-1'>
          <a href="/" className="flex flex-col items-center bg-black rounded-lg border shadow-md md:flex-row md:max-w-sm h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">How Does Cloud Storage Work?</h5>
              <p className="mb-3 font-normal text-gray-200 dark:text-white">Cloud storage is purchased from a third party cloud vendor who owns and operates data storage capacity and delivers it over the Internet in a pay-as-you-go model. These cloud storage vendors manage capacity, security and durability to make data accessible to your applications all around the world.</p>
            </div>
          </a>
        </div>
      </div>
      <div className='container flex col-md-3'>
        <div className='mx-1'>
          <a href="/" className="flex flex-col items-center bg-black rounded-lg border shadow-md md:flex-row md:max-w-sm h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Backup and Recovery</h5>
              <p className="mb-3 font-normal text-gray-200 dark:text-white">Backup and recovery is a critical part of ensuring data is protected and accessible, but keeping up with increasing capacity requirements can be a constant challenge. Cloud storage brings low cost, high durability, and extreme scale to backup and recovery solutions.Embedded data management policies like Amazon S3 Object Lifecycle Management can automatically migrate data to lower-cost tiers based on frequency or timing settings, and archival vaults can be created to help comply with legal or regulatory requirements.</p>
            </div>
          </a>
        </div>
        <a href="/" className="flex flex-col items-center bg-black rounded-lg border shadow-md md:flex-row md:max-w-3xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Benefits of Cloud Storage</h5>
            <p className="mb-3 font-normal text-gray-200 dark:text-white">Storing data in the cloud lets IT departments transform three areas:

              Total Cost of Ownership. With cloud storage, there is no hardware to purchase, storage to provision, or capital being used for "someday" scenarios. You can add or remove capacity on demand, quickly change performance and retention characteristics, and only pay for storage that you actually use. Less frequently accessed data can even be automatically moved to lower cost tiers in accordance with auditable rules, driving economies of scale.
              Time to Deployment. When development teams are ready to execute, infrastructure should never slow them down. Cloud storage allows IT to quickly deliver the exact amount of storage needed, right when it's needed. This allows IT to focus on solving complex application problems instead of having to manage storage systems.
              Information Management. Centralizing storage in the cloud creates a tremendous leverage point for new use cases. By using cloud storage lifecycle management policies, you can perform powerful information management tasks including automated tiering or locking down data in support of compliance requirements.</p>
          </div>
        </a>
         

      </div>
      <a className='p-12 my-6 r-2 justify-end text-sm font-semibold font-serif' href="https://aws.amazon.com/what-is-cloud-storage/">Information Source:Amazon</a>

    </>
  )
}

export default About