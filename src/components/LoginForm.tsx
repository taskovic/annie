
export default function LoginForm({ 
  onSubmit, 
  handleInputChange 
}: any) {
  
  return (
    <div className="annie-login-form">
      <form onSubmit={onSubmit}>
        <input type="text" name="username" onChange={handleInputChange} placeholder="Username" />
        <input type="text" name="password" onChange={handleInputChange} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}