export default function Badge({
    mediaSwitch = false,
    iconOnly = false,
    status,
    statusText,
    srPrefix,
  }) {
    let statusClass = mediaSwitch
      ? `ui-badge-switch-${status}`
      : `ui-badge-${status}`;
    let useIcon, srText;
    switch (status) {
      case "problem":
        useIcon = <use href="#ui-icon-circle-solid-exclamation"></use>;
        srText = `${srPrefix} has problem`;
        break;
      case "risk":
        useIcon = <use href="#ui-icon-circle-solid-exclamation"></use>;
        srText = `${srPrefix} is at risk`;
        break;
      default:
        useIcon = <use href="#ui-icon-circle-solid-checkmark"></use>;
        srText = `${srPrefix} is good`;
        break;
    }
    return (
      <div
        className={`${
          iconOnly ? "ui-badge-icon-only" : "ui-badge-icon"
        } ${statusClass}`}
      >
        <svg
          className="ui-icon w-4 h-4"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          {useIcon}
        </svg>
        <span className="sr-only">{`${srText}`}</span>
        {!iconOnly && (
          <span
            className={`ui-badge-text ${
              mediaSwitch ? "sr-only md:not-sr-only" : ""
            }`}
          >
            {statusText}
          </span>
        )}
      </div>
    );
  }
  