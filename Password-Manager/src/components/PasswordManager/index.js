import './index.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordList, setPasswordList] = useState([])
  const [search, setSearch] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onTogglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const onAddPassword = event => {
    event.preventDefault()

    if (website === '' || username === '' || password === '') {
      return
    }

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    setPasswordList(prevList => [...prevList, newPassword])

    setWebsite('')
    setUsername('')
    setPassword('')
  }

  const deletePwdList = id => {
    setPasswordList(prevList => prevList.filter(eachPwd => eachPwd.id !== id))
  }

  const filteredPasswordList = passwordList.filter(
    eachPwd =>
      eachPwd.website.toLowerCase().includes(search.toLowerCase()) ||
      eachPwd.username.toLowerCase().includes(search.toLowerCase()) ||
      eachPwd.password.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className='app-container'>
      <img
        className='logo'
        src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
        alt='app logo'
      />

      <div className='top-card'>
        <div className='form-card'>
          <h1>Add New Password</h1>

          <form onSubmit={onAddPassword}>
            <div className='input-container'>
              <div className='icon-container'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                  alt='website'
                  className='icon'
                />
              </div>

              <input
                type='text'
                placeholder='Enter Website'
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </div>

            <div className='input-container'>
              <div className='icon-container'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                  alt='username'
                  className='icon'
                />
              </div>

              <input
                type='text'
                placeholder='Enter Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='input-container'>
              <div className='icon-container'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                  alt='password'
                  className='icon'
                />
              </div>

              <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button type='submit'>Add</button>
          </form>
        </div>

        <img
          className='banner'
          src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
          alt='password manager'
        />
      </div>

      <div className='bottom-card'>
        <div className='header'>
          <div className='left'>
            <h2>Your Passwords</h2>
            <p className='count'>{passwordList.length}</p>
          </div>

          <div className='search-box'>
            <div className='icon-container'>
              <img
                className='icon'
                src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                alt='search'
              />
            </div>

            <input
              type='search'
              placeholder='Search'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <hr />

        <div className='show-password'>
          <input
            id='check'
            type='checkbox'
            checked={showPassword}
            onChange={onTogglePassword}
          />
          <label htmlFor='check'>Show Passwords</label>
        </div>

        {filteredPasswordList.length === 0 ? (
          <div className='empty-view'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
              alt='no passwords'
            />
            <p>No Passwords</p>
          </div>
        ) : (
          <ul className='password-list'>
            {filteredPasswordList.map(eachPwd => (
              <li className='password-container' key={eachPwd.id}>
                <div className='profile'>
                  {eachPwd.website.charAt(0).toUpperCase()}
                </div>

                <div className='password-details'>
                  <p>{eachPwd.website}</p>
                  <p>{eachPwd.username}</p>

                  {showPassword ? (
                    <p>{eachPwd.password}</p>
                  ) : (
                    <img
                      className='stars'
                      src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
                      alt='stars'
                    />
                  )}
                </div>

                <button
                  type='button'
                  className='delete-btn'
                  data-testid='delete'
                  onClick={() => deletePwdList(eachPwd.id)}
                >
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
                    alt='delete'
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
