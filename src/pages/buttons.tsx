import ComponentPreview from '~/components/templates/ComponentPreview';
import ButtonCore, { ButtonProps } from '~/components/atoms/Button';
import buttonText from '~/stores/buttonText';

function Button(props: ButtonProps) {
  return (
    <O>{() => (
      <ButtonCore {...props}>{buttonText.value}</ButtonCore>
    )}
    </O>
  );
}

function Buttons() {
  return (
    <div className="p-16 space-y-8">
      <ComponentPreview name="<Button />">
        <Button />
      </ComponentPreview>
      <ComponentPreview name="<Button variant='outline' />">
        <Button variant="outline" color="primary" />
      </ComponentPreview>
      <ComponentPreview name="<Button variant='text' />">
        <Button variant="text" color="primary" />
      </ComponentPreview>
      <ComponentPreview name="<Button disableShadow />">
        <Button disableShadow color="primary" />
      </ComponentPreview>
      <div className="flex gap-16">
        <ComponentPreview name="<Button disabled />">
          <Button disabled />
        </ComponentPreview>
        <ComponentPreview name="<Button variant='text' disabled />">
          <Button disabled variant="text" />
        </ComponentPreview>
      </div>
      <div className="flex gap-16 align-top">
        <ComponentPreview name="<Button startIcon='i-mdi-local-grocery-store' />">
          <Button color="primary" startIcon="i-mdi-local-grocery-store" />
        </ComponentPreview>
        <ComponentPreview name="<Button endIcon='i-mdi-local-grocery-store' />">
          <Button color="primary" endIcon="i-mdi-local-grocery-store" />
        </ComponentPreview>
      </div>
    </div>
  );
}

export default Buttons;
