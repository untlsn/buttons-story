import ComponentPreview from '~/components/templates/ComponentPreview';
import ButtonCore, { ButtonProps } from '~/components/atoms/Button';
import buttonStore from '~/stores/buttonStore';
import ButtonDataEdit from '~/components/organisms/ButtonDataEdit';

function Button(props: ButtonProps) {
  return (
    <O>{() => (
      <ButtonCore {...props}>{buttonStore.text}</ButtonCore>
    )}
    </O>
  );
}

function Buttons() {
  return (
    <main className="p-16 space-y-8">
      <ButtonDataEdit />
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
      <div className="flex gap-16 align-top">
        <ComponentPreview name="<Button size='sm' />">
          <Button color="primary" size="sm" />
        </ComponentPreview>
        <ComponentPreview name="<Button size='md' />">
          <Button color="primary" size="md" />
        </ComponentPreview>
        <ComponentPreview name="<Button size='lg' />">
          <Button color="primary" size="lg" />
        </ComponentPreview>
      </div>
      <div className="flex gap-16 align-top">
        <ComponentPreview name="<Button color='default' />">
          <Button color="default" />
        </ComponentPreview>
        <ComponentPreview name="<Button color='primary' />">
          <Button color="primary" />
        </ComponentPreview>
        <ComponentPreview name="<Button color='secondary' />">
          <Button color="secondary" />
        </ComponentPreview>
        <ComponentPreview name="<Button color='danger' />">
          <Button color="danger" />
        </ComponentPreview>
      </div>
    </main>
  );
}

export default Buttons;
