# Research about Jotai

One of the main concept of React is that it power by the hook **React useState** and from there we will can modify the state of any value we created in that component, but to built more complex application we need mutiple component so that the need for reuse the state is become a problem, so how can we improve it?

There are several ways to pass state to other components in React:
 
 - Props: This is the most common way to pass state to child components. You can simply pass the state down from the parent component to the child component as a prop.
 - Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is useful when you have many components that need access to the same data.
 - Redux: Redux is a state management library that provides a central store for managing the state of the application. It allows you to access and modify the state from any component in the application.
 - React Router: If you are passing state between different routes in your application, you can use React Router to manage the state.
 - Event Bus (I don't even know this exist): An event bus is a messaging system that allows you to pass events and data between different parts of your application. You can use an event bus to pass state between components that are not directly connected to each other in the component tree.
 
 Based on my research Jotai really look alike with the **useContext**, this is there simple code on the website
 '''
const dumbAtom = atom([{ name: 'Friend 1', online: false }])
const onlineAtom = atom((get) => get(dumbAtom).filter((item) => item.online))
const offlineAtom = atom((get) => get(dumbAtom).filter((item) => !item.online))

 '''
