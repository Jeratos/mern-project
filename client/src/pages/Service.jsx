import React from 'react'
import "./style/service.css"
import { useAuth } from '../store/auth'
import Serv from "../props/service-props"

export default function Service() {

  // Destructure the services from useAuth hook
  let { services } = useAuth();

  return (
    <>
      <h1 className='head'>
        Services
      </h1>
      <section className="card-main">
        {
          // Check if services exists and is an array before mapping
          Array.isArray(services) && services.length > 0 ? (
            services.map((currentEl, index) => {
              let { price, description, provider, service } = currentEl;
              return (
                <Serv 
                key={index}
                price={price}
                description={description}
                provider={provider}
                service={service}
                />
              )
            })
          ) : (
            <p>No services available</p>
          )
        }
      </section>
    </>
  );
}