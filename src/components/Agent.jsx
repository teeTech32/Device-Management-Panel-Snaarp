import one from '../assets/images/one.jpg'

const agent = {
  name: 'Chidinma Snaarp',
  email: 'almJawso@example.com',
  image: one
}

const Agent = () => {
  return (  
    <card className='d-flex mx-3 mt-1' style={{marginBottom: '230px'}}>
      <figure className='mx-2'>
        <img src={one} alt={agent.name} className='rounded-circle img-fluid circle-img border border-3 border-primary' style={{width: '40px', height: '40px'}}/>
      </figure>
      <div>
        <p className='text-black mb-1'>{agent.name}</p>
        <p className='text-secondary opacity-50' style={{fontSize: '12px'}}>{agent.email}</p>
      </div>
    </card>  
  )
}

export default Agent