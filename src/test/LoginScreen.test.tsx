import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Login from '../components/login-screen/Login'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createMemoryHistory } from 'history'


test('Then it shuold show the user text on input box', () => {
  const expectTextUser = 'vaibhav'
  const expectTextPassword = '1234'

  render(
    <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
  )
  const emailElement = screen.getByTestId('email-element')
  const passwordElement = screen.getByTestId('password-element')
  expect(emailElement).toBeInTheDocument()

  userEvent.type(emailElement, 'vaibhav')
  userEvent.type(passwordElement, '1234')

  expect(emailElement).toHaveAttribute('value', expectTextUser)
  expect(passwordElement).toHaveAttribute('value', expectTextPassword)
})

const typeIntoForm = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const emailElement = screen.getByTestId('email-element')
  const passwordElement = screen.getByTestId('password-element')
  if (email) {
    userEvent.type(emailElement, email)
  }
  if (password) {
    userEvent.type(passwordElement, password)
  }

  return {
    emailElement,
    passwordElement,
  }
}

describe('App', () => {
  window.history.pushState({},"","/login")
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )
  })

  test('inputs should exist', () => {
    const emailElement = screen.getByTestId('email-element') as HTMLInputElement
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement
    expect(emailElement).toBeInTheDocument()
    expect(passwordElement).toBeInTheDocument()
    screen.debug()
  })

  test('inputs should be initially empty', () => {
    const emailElement = screen.getByTestId('email-element') as HTMLInputElement
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement
    expect(emailElement.value).toBe('')
    expect(passwordElement.value).toBe('')
  })

  test('should be able to type an email', () => {
    const emailElement = screen.getByTestId('email-element') as HTMLInputElement
    typeIntoForm({ email: 'vaibhav@gmail.com', password: '123' })
    expect(emailElement.value).toBe('vaibhav@gmail.com')
  })

  test('should be able to type a password but with wrong combination so that button will not get enabled', () => {
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Login/i })
    typeIntoForm({ email: '', password: 'vai' })
    expect(passwordElement.value).toBe('vai')
    expect(buttonElement).toBeDisabled()
  })

  test('should be able to type a password with right combination so that button will get enabled', () => {
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Login/i })
    typeIntoForm({ email: '', password: 'Vaibhav@1234' })
    expect(passwordElement.value).toBe('Vaibhav@1234')
    expect(buttonElement).toBeEnabled()
  })

  test('Then it have both values', async () => {
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement
    const emailElement = screen.getByTestId('email-element') as HTMLInputElement
    typeIntoForm({ email: 'vaibhavsutar264@gmail.com', password: 'Vaibhav@123' })
    expect(emailElement.value).toBe('vaibhavsutar264@gmail.com')
    expect(passwordElement.value).toBe('Vaibhav@123')
    const NavigateToSetpasswordScreen = screen.getByRole('button', {
      name: /Login/i,
    })
    const errorafterwrongcredentials =
      'Entered credential are not correct'
    userEvent.click(NavigateToSetpasswordScreen)
    waitFor(() => expect(errorafterwrongcredentials).toBeInTheDocument());
  })

  test('Then it should be redirectioned to the setpassword Page', async () => {
    // const history = createMemoryHistory();
    const textInput = ['vaibhavsutar264@gmail.com', 'Vaibhav@1234']

    //below is the mock jsonserverapi with fake jwt token api
    //   const textInput = ['nilson8@email.com', 'nilson'

    const emailElement = screen.getByTestId(
      'email-element'
    ) as HTMLInputElement
    const passwordElement = screen.getByTestId(
      'password-element'
    ) as HTMLInputElement

    typeIntoForm({ email: 'vaibhavsutar264@gmail.com', password: 'Vaibhav@123' })

    // userEvent.type(emailElement, textInput[0])
    // userEvent.type(passwordElement, textInput[1])

    const NavigateToSetpasswordScreen = screen.getByTestId(
      'button-element'
    ) as HTMLButtonElement
    const setpasswordscreen ='Set Password'
    userEvent.click(NavigateToSetpasswordScreen)
    // expect(history.location.pathname).toEqual('/about');
    waitFor(() => expect(setpasswordscreen).toBeInTheDocument());
    // expect(setpasswordscreen).toBeVisible()
  })
})
