import { NavLink } from "@remix-run/react";
import { format, isSameDay } from "date-fns";

interface IContactInfo {
  user: string,
  imageProfileURL: string,
  name: string,
  lastMessage: {
    content: string,
    sentAt: Date,
  },
}

export default function Contact({ user, name, imageProfileURL, lastMessage }: IContactInfo) {
  const formatStr = isSameDay(lastMessage.sentAt, new Date()) ? "HH:mm" : "dd/MM/yyyy"
  const sentAtDateFormatted = format(lastMessage.sentAt, formatStr);

  return (
    <NavLink
      to={`/chat/${user}`}
      className="flex gap-7 border-b border-zinc-800 py-4 px-6 hover:bg-zinc-900/40 transition"
    >
      <img
        src={imageProfileURL}
        className="h-14 w-14 rounded-full"
        alt=""
      />
      <div className="flex-1 w-1/3">
        <span className="text-title text-xl">
          {name}
        </span>
        <p className="text-text/80 truncate">
          {lastMessage.content}
        </p>
      </div>

      <time
        className="text-text/80 text-sm"
        title={sentAtDateFormatted}
        dateTime={lastMessage.sentAt.toISOString()}
      >
        {sentAtDateFormatted}
      </time>
    </NavLink>
  )
}