interface ActionMain {
  loading: (status: boolean) => void;
}
export let actionMain: ActionMain;
export const actionInit = (props: any) => {
  actionMain = {
    loading: (status: boolean) => props.setLoading({status}),
  };
};
