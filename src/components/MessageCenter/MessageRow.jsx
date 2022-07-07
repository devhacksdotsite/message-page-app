import Badge from "../General/Badge";

export default function MessageRow({ message, admin }) {
  return (
    <div
      className={`${
        message.status ? `ui-badge-bar-left-${message.status}` : ""
      } relative flex flex-col py-4 pl-6 pr-4 bg-white border-b border-ui-gray-medium md:pl-8 lg:pl-12`}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="text-ui-gray-dark font-semibold">
          {message.title}
        </div>
        <div className="text-ui-blue text-xxs font-bold text-right">
          { !admin && (message.date) }
        </div>
      </div>
      <div className="text-ui-gray font-bold text-xxs">
        { admin ? (
          <>
            <span>{ message.date }</span>
            <span className="ml-4">RE: { message.subject || "Payment" }</span>
            <span className="ml-4">Policy #{ message.policyNumber } -- ctg:{ message.category }</span>
          </>
          ) : (
            <span>Policy #{ message.policyNumber } -- ctg:{ message.category }</span>
          ) }
      </div>
      <div className="text-ui-gray-dark text-xxs min-h-8 pb-2">
        {message.desc}
      </div>
      <div>
        <a href="#" className="ui-btn-primary">
          {message.cta}
        </a>
      </div>
    </div>
  );
}
