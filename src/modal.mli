open! Core
open Virtual_dom

val node
  :  ?modal_attrs:Vdom.Attr.t list
  -> ?lock_body_scroll:bool
  -> Vdom.Node.t
  -> Vdom.Node.t

module For_testing_bonsai_web_ui_toplayer : sig
  val modal_attr_name : string
  val lock_body_scroll_attr_name : string
end
