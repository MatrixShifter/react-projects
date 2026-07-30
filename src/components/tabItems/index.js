import './index.css'

const TabItems = ({tabsList, updateActiveId, activeId}) => (
  <ul className="tab-list">
    {tabsList.map(tab => (
      <li key={tab.tabId} className="tab-item">
        <button
          type="button"
          className={activeId === tab.tabId ? 'active-tab-btn' : 'tab-btn'}
          onClick={() => updateActiveId(tab.tabId)}
        >
          {tab.displayText}
        </button>
      </li>
    ))}
  </ul>
)

export default TabItems
