export default function ProgressBar({ width = 0 }: { width?: number }) {

  return (
    <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div id="progressBar"className="max-w-full glass bg-primary h-1.5 rounded-full dark:bg-blue-500" style={ { width: `${width}%` } }></div>
    </div>
  )

}