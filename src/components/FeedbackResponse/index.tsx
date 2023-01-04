import React from 'react'

interface IFeedbackResponse extends React.HtmlHTMLAttributes<HTMLDivElement> {
  feed: string;
}

export const FeedbackResponse = ({ feed, ...rest }: IFeedbackResponse) => {
  return (
    <div
      {...rest}
    >{feed}</div>
  )
}
