import { Outlet } from "@remix-run/react";
import _ from 'lodash';
import { Plus, Search } from "lucide-react";
import Contact from "../../components/Contact";
import * as Input from "../../components/UI/Input";

const data = {
  contacts: [
    {
      user: "thomas",
      imageProfileURL: "https://github.com/Thomas.png",
      name: "Thomas Smith",
      lastMessage: {
        content: "The later submodules are also included inside the former if you want to use multiple features from the list.",
        sentAt: new Date("2024-10-19 09:40:00"),
      }
    },
    {
      user: "jack",
      imageProfileURL: "https://github.com/jack.png",
      name: "Jack with",
      lastMessage: {
        content: "Hey there! xxxxxxxxxxxxxxxxxxxxxx",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "larry",
      imageProfileURL: "https://github.com/larry.png",
      name: "Larry Doe",
      lastMessage: {
        content: "What's up?",
        sentAt: new Date("2024-10-19 22:45:00"),
      }
    },
    {
      user: "thomas",
      imageProfileURL: "https://github.com/Thomas.png",
      name: "Thomas Smith",
      lastMessage: {
        content: "Good night",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "jack",
      imageProfileURL: "https://github.com/jack.png",
      name: "Jack with",
      lastMessage: {
        content: "Hey there!",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "larry",
      imageProfileURL: "https://github.com/larry.png",
      name: "Larry Doe",
      lastMessage: {
        content: "What's up?",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "thomas",
      imageProfileURL: "https://github.com/Thomas.png",
      name: "Thomas Smith",
      lastMessage: {
        content: "Good night",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "jack",
      imageProfileURL: "https://github.com/jack.png",
      name: "Jack with",
      lastMessage: {
        content: "Hey there!",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },
    {
      user: "larry",
      imageProfileURL: "https://github.com/larry.png",
      name: "Larry Doe",
      lastMessage: {
        content: "What's up?",
        sentAt: new Date("2024-10-18 09:40:00"),
      }
    },

  ]
}

export default function Chat() {
  const contacts = _.orderBy(data.contacts, "lastMessage.sentAt", "desc")

  return (
    <div className="grid grid-cols-[minmax(330px,_25%)_auto] h-screen bg-elements tracking-wider">
      <div className="py-8 overflow-auto">
        <header className="sticky top-0 bg-elements">
          <div className="flex items-center gap-4 px-6">
            <img
              src="https://github.com/diego3g.png"
              className="h-14 w-14 rounded-full"
              alt=""
            />
            <div className="truncate">
              <h3 className="text-2xl font-semibold text-title">
                John doe
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 my-6 px-6">
            <Input.Root className="bg-zinc-700/40 py-0 rounded-full">
              <Input.Prefix>
                <Search className="h-6 w-6 text-text/70" />
              </Input.Prefix>
              <Input.Control placeholder="Buscar" />
            </Input.Root>
            <button className="bg-primary rounded-full p-3">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </header>

        <nav className="flex flex-col">
          {contacts.map((user, i) => {
            return (
              <Contact key={i} {...user} />
            )
          })}
        </nav>
      </div>
      <Outlet />
    </div>
  )
}