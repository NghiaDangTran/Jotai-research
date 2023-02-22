# Research about Jotai

One of the main concept of React is that it power by the hook **React useState** and from there we will can modify the state of any value we created in that component, but to built more complex application we need mutiple component so that the need for reuse the state is become a problem, so how can we improve it?

There are several ways to pass state to other components in React:
 
 - Props: This is the most common way to pass state to child components. You can simply pass the state down from the parent component to the child component as a prop.
 - Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is useful when you have many components that need access to the same data.
 - Redux: Redux is a state management library that provides a central store for managing the state of the application. It allows you to access and modify the state from any component in the application.
 - React Router: If you are passing state between different routes in your application, you can use React Router to manage the state.
 - Event Bus (I don't even know this exist): An event bus is a messaging system that allows you to pass events and data between different parts of your application. You can use an event bus to pass state between components that are not directly connected to each other in the component tree.
 
 Based on my research Jotai really look alike with the **useContext**, this is there simple code on the website
 
```
const dumbAtom = atom([{ name: 'Friend 1', online: false }])
const onlineAtom = atom((get) => get(dumbAtom).filter((item) => item.online))
const offlineAtom = atom((get) => get(dumbAtom).filter((item) => !item.online))
```
and a little bit about myself I used to the concept of Redux Toolkit, it is a extra layer to simlify the Redux. This is the code snipe of a simple program where you need to create one file to store all of your state and call function by the reducers.
```
import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```


# Basic of Jotai

## atom
atom is like a useState in react where you can modify and set the value

```
const readOnlyAtom = atom((get) => get(priceAtom) * 2)
const writeOnlyAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, update) => {
    // `update` is any single value we receive for updating this atom
    set(priceAtom, get(priceAtom) - update.discount)
  }
)
const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2)
    // you can set as many atoms as you want at the same time
  }
)
```
> Note that the art of atom is that it can use dynamically, which mean u can use it any where, in side component or as a centralize state or even async atom or cooler one is create on your need, ex: return a atom from another atom which can simplyfy complex state



# useAtom, useAtomValue, useSetAtom
```
#syntax like useState 
const [value, setValue] = useAtom(anAtom)
# useAtomValue only return the read
const count = useAtomValue(countAtom)
# useSetAtom only set the atom 
const setCount = useSetAtom(switchAtom)
const setTrue = () => setCount(true)

```
# createStore
from doc:
this function is to create a new empty store. The store can be used to pass in Provider.
The store has three methods: get for getting atom values, set for setting atom values, and sub for subscribing to atom changes.
# atomWithStorage
https://jotai.org/docs/utilities/storage
The atomWithStorage function creates an atom with a value persisted in localStorage or sessionStorage for React or AsyncStorage for React Native.
Parameters
key (required): a unique string used as the key when syncing state with localStorage, sessionStorage, or AsyncStorage
initialValue (required): the initial value of the atom
storage (optional): an object with:
getItem, setItem and removeItem methods for storing/retrieving/deleting persisted state; defaults to using localStorage for storage/retrieval and JSON.stringify()/JSON.parse() for serialization/deserialization.
Optionally, the storage has a subscribe property, which can be used to synchronize storage. The default localStorage handles storage events for cross-tab synchronization.
```
const myStore = createStore()

const countAtom = atom(0)
myStore.set(countAtom, 1)
myStore.sub(countAtom, () => {
  console.log('countAtom value is changed to', myStore.get(countAtom))
})

const Root = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
)
```

# handel Async call with loadable
```
loadable will return an object store these value
{
    state: 'loading' | 'hasData' | 'hasError',
    data?: any,
    error?: any,
}
```
# atomFamily
like every stage management library we have atomFamily to use individual atom anywhere without propdriling

# Conclusion
this is heavily my own opinions, because I spent so much time with redux 
| Pros  | Cons |
| ------------- | ------------- |
| light weight, simplyfy process of stage manament, create one atom at one component can easily call that atom on orther component without the cost of setting new code (redux do the same but we need more code)    | still early, low user base compare to orther react state management, this may have effect in long term if the creator doesnot support anymore ,may make the document process harder  | 
