interface ComponentPreviewProps {
  children: any,
  name: string
}

function ComponentPreview(props: ComponentPreviewProps) {
  return (
    <div className="space-y-3">
      <p className="text-gray-800">{props.name.replace(/'/g, '"')}</p>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default ComponentPreview;
