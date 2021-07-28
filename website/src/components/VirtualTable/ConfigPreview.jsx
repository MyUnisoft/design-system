import React from 'react';

const ConfigPreview = ({config, settings = []}) => {
  return (
    <pre>
    <code>
      {`{
`}

      { settings.map((setting) => `  ${setting.key}: ${config[setting.key] ? 'true' : 'false'},
`
      )}
      {'}'}
    </code>
  </pre>
  )
}

export default ConfigPreview;