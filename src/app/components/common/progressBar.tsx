export default function ProgressBar({ width = 0 }: { width?: number }) {
  return (
    <div className="bg-gray-200 rounded-full h-1.5 dark:bg-baase-100">
      <div id="progressBar"className="max-w-full glass bg-primary h-1.5 rounded-full dark:bg-accent" style={ { width: `${width}%` } }></div>
    </div>
  )
}