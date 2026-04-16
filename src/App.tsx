import { ConfigProvider, theme } from 'antd'
import Resume from './components/Resume'
import './index.css'

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#38bdf8',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
        },
      }}
    >
      <Resume />
    </ConfigProvider>
  )
}
